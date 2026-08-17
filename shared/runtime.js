import { ASUKA_CHARACTER, UNIT_02_FAVICON } from './art.js'
import { ASUKA_CSS } from './theme-css.js'

const SKIN_ID = 'dsh-skin-asuka'
const SKIN_TITLE = '明日香 · UNIT-02 · DeepSeek Harness'
const OWNER = 'asuka-interface'
const SIDEBAR_SELECTOR = ":is([data-pane='sidebar'], [class*='sidebarCol'])"

/** Skin chrome is marked so the disposer never touches host-owned nodes. */
function createOwned(tag, chrome) {
  const node = document.createElement(tag)
  node.dataset.skinOwner = OWNER
  node.dataset.skinChrome = chrome
  return node
}

/** Character and HUD stay separate so chat state can soften them independently. */
function createCharacterStage() {
  const stage = createOwned('div', 'asuka-character-stage')
  const ring = document.createElement('span')
  const character = document.createElement('img')
  stage.setAttribute('aria-hidden', 'true')
  ring.dataset.asukaHudRing = ''
  character.dataset.asukaCharacter = ''
  character.alt = ''
  character.src = ASUKA_CHARACTER
  stage.append(ring, character)
  return stage
}

/** A style element keeps this prebuilt package usable without an asset server. */
function createStylesheet() {
  const style = createOwned('style', 'asuka-styles')
  style.textContent = ASUKA_CSS
  return style
}

/** The alert rail communicates the theme without intercepting app input. */
function createAlertRail() {
  const rail = createOwned('div', 'asuka-alert-rail')
  rail.setAttribute('aria-hidden', 'true')
  return rail
}

/** The favicon is owned and removable, unlike a global replacement. */
function createFavicon() {
  const favicon = createOwned('link', 'asuka-favicon')
  favicon.rel = 'icon'
  favicon.type = 'image/svg+xml'
  favicon.href = UNIT_02_FAVICON
  return favicon
}

/** Reinsert the host icons on cleanup so browsers actively select them again. */
function installFavicon() {
  const head = document.head
  const originals = Array.from(head.querySelectorAll('link[rel]'))
    .filter(node => node.relList.contains('icon'))
    .map(node => ({ node, nextSibling: node.nextSibling }))

  for (const { node } of originals) node.remove()

  const favicon = createFavicon()
  head.append(favicon)

  return {
    favicon,
    restore() {
      favicon.remove()
      for (let index = originals.length - 1; index >= 0; index -= 1) {
        const { node, nextSibling } = originals[index]
        if (node.isConnected) continue
        const anchor = nextSibling?.parentNode === head ? nextSibling : null
        head.insertBefore(node, anchor)
      }
    },
  }
}

/** Title bars mount late in desktop shells, so decoration is idempotent. */
function decorateTitlebar(ownedNodes) {
  const titlebar = document.querySelector("[class*='titlebar']")
  if (!titlebar || titlebar.querySelector("[data-skin-chrome='asuka-titlebar-brand']")) return
  const brand = createOwned('span', 'asuka-titlebar-brand')
  brand.textContent = 'ASUKA // EVA UNIT-02'
  brand.setAttribute('aria-hidden', 'true')
  ownedNodes.add(brand)
  titlebar.prepend(brand)
}

/** Layout variables let fixed chrome follow the live resizable sidebar. */
function measureLayout(body) {
  const sidebar = document.querySelector(SIDEBAR_SELECTOR)
  const width = sidebar?.getBoundingClientRect().width ?? 0
  const top = sidebar?.getBoundingClientRect().top ?? 0
  body.style.setProperty('--asuka-sidebar-width', `${Math.max(0, width)}px`)
  body.style.setProperty('--asuka-titlebar-height', `${Math.max(0, top)}px`)
  return sidebar
}

/** ResizeObserver avoids polling while the user drags or collapses the rail. */
function observeSidebar(observer, current, body) {
  const next = measureLayout(body)
  if (next === current) return current
  if (current) observer.unobserve(current)
  if (next) observer.observe(next)
  return next
}

/** Headless previews lack ResizeObserver, but activation should still work. */
function createResizeObserver(body) {
  if (typeof ResizeObserver !== 'undefined') {
    return new ResizeObserver(() => measureLayout(body))
  }
  return { observe() {}, unobserve() {}, disconnect() {} }
}

/** Theme-color restoration respects the value that was present on activation. */
function setSystemChrome() {
  const meta = document.head.querySelector('meta[name="theme-color"]')
  if (!meta) return { meta: null, value: undefined }
  const value = meta.content
  meta.content = '#16090b'
  return { meta, value }
}

/** Apply only reversible DOM and CSS changes owned by this skin. */
export function activateSkin(ctx) {
  const body = document.body
  const originalTitle = document.title
  const oldSidebarWidth = body.style.getPropertyValue('--asuka-sidebar-width')
  const oldTitlebarHeight = body.style.getPropertyValue('--asuka-titlebar-height')
  const ownedNodes = new Set()
  const systemChrome = setSystemChrome()
  let faviconState
  let observedSidebar
  let syncFrame

  const resizeObserver = createResizeObserver(body)
  const sync = () => {
    syncFrame = undefined
    decorateTitlebar(ownedNodes)
    observedSidebar = observeSidebar(resizeObserver, observedSidebar, body)
  }
  const scheduleSync = () => {
    if (syncFrame === undefined) syncFrame = requestAnimationFrame(sync)
  }
  const mutationObserver = new MutationObserver(scheduleSync)
  const onWindowResize = () => measureLayout(body)

  ctx.effect(() => () => {
    mutationObserver.disconnect()
    resizeObserver.disconnect()
    window.removeEventListener('resize', onWindowResize)
    if (syncFrame !== undefined) cancelAnimationFrame(syncFrame)
    faviconState?.restore()
    ownedNodes.forEach(node => node.remove())
    delete body.dataset.dshAsukaInterface
    body.style.setProperty('--asuka-sidebar-width', oldSidebarWidth)
    body.style.setProperty('--asuka-titlebar-height', oldTitlebarHeight)
    if (document.title === SKIN_TITLE) document.title = originalTitle
    if (systemChrome.meta?.isConnected) systemChrome.meta.content = systemChrome.value ?? ''
  }, 'ui-skin-asuka-interface: reversible command-interface chrome')

  body.dataset.dshAsukaInterface = ''
  faviconState = installFavicon()
  ownedNodes.add(faviconState.favicon)
  for (const node of [createStylesheet(), createCharacterStage(), createAlertRail()]) {
    ownedNodes.add(node)
    if (node instanceof HTMLStyleElement || node instanceof HTMLLinkElement) document.head.append(node)
    else body.prepend(node)
  }
  document.title = SKIN_TITLE
  mutationObserver.observe(body, { childList: true, subtree: true })
  window.addEventListener('resize', onWindowResize)
  sync()
}

/** The manager owns the Cordis child fiber and therefore the full disposer. */
async function mountManagedSkin(ctx) {
  const fiber = ctx.plugin({ apply: activateSkin })
  await fiber.await()
  return () => fiber.dispose()
}

/** Registration stays inert until the user selects this skin. */
export function apply(ctx) {
  ctx.effect(() => ctx.skinManager.register({
    id: SKIN_ID,
    name: 'dsh-skin-asuka',
    description: '警戒红、插入栓 HUD 与 UNIT-02 作战界面。',
    author: 'Local DSH theme',
    preview: ASUKA_CHARACTER,
    order: 2,
    activate: () => mountManagedSkin(ctx),
  }), 'ui-skin-asuka-interface: skin registration')
}

export const inject = ['skinManager']
