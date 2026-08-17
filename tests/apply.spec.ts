// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import vm from 'node:vm'
import { activateSkin, apply } from '../shared/runtime.js'
import { ASUKA_CSS } from '../shared/theme-css.js'

let dispose: (() => void) | undefined

function context() {
  return {
    effect(factory: () => (() => void)) {
      dispose = factory()
    },
  }
}

afterEach(() => {
  dispose?.()
  dispose = undefined
  document.body.innerHTML = ''
  document.head.querySelectorAll('[data-skin-owner]').forEach(node => node.remove())
  document.head.querySelectorAll('[data-test-fixture]').forEach(node => node.remove())
  vi.restoreAllMocks()
})

describe('Asuka interface skin', () => {
  it('ships the dsh-web-ui module-loader closure', () => {
    let registration: { id: string; factory: (require: () => never) => object } | undefined
    const window = { __ModuleLoader__: { load(value: typeof registration) { registration = value } } }
    const source = readFileSync(resolve(process.cwd(), 'lib/client.js'), 'utf8')
    vm.runInNewContext(source, { window })
    const exports = registration!.factory(() => { throw new Error('unexpected external') })

    expect(registration!.id).toBe('dsh-skin-asuka')
    expect(exports).toMatchObject({ inject: ['skinManager'] })
  })

  it('applies owned chrome and retracts it completely', () => {
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      callback(0)
      return 1
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())
    document.body.innerHTML = '<div data-pane="sidebar"></div><main id="root"></main>'
    activateSkin(context() as never)

    expect(document.body.hasAttribute('data-dsh-asuka-interface')).toBe(true)
    expect(document.querySelector('[data-asuka-character]')).not.toBeNull()
    expect(document.querySelector("[data-skin-chrome='asuka-alert-rail']")).not.toBeNull()
    expect(document.head.querySelector("[data-skin-chrome='asuka-styles']")).not.toBeNull()

    dispose?.()
    dispose = undefined
    expect(document.body.hasAttribute('data-dsh-asuka-interface')).toBe(false)
    expect(document.querySelectorAll("[data-skin-owner='asuka-interface']")).toHaveLength(0)
  })

  it('restores the original favicon when the skin is retracted', () => {
    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
      callback(0)
      return 1
    })
    vi.stubGlobal('cancelAnimationFrame', vi.fn())
    const original = document.createElement('link')
    const marker = document.createElement('meta')
    original.rel = 'icon'
    original.href = '/favicon.ico'
    original.dataset.testFixture = ''
    marker.dataset.testFixture = ''
    document.head.append(original, marker)

    activateSkin(context() as never)

    expect(original.isConnected).toBe(false)
    expect(document.head.querySelector("[data-skin-chrome='asuka-favicon']")).not.toBeNull()

    dispose?.()
    dispose = undefined
    expect(document.head.querySelector("[data-skin-chrome='asuka-favicon']")).toBeNull()
    expect(original.isConnected).toBe(true)
    expect(original.nextSibling).toBe(marker)
    expect(original.href).toBe(new URL('/favicon.ico', document.baseURI).href)
  })

  it('registers without changing the page before selection', () => {
    let registered: { id: string; name: string; author: string } | undefined
    const ctx = {
      skinManager: {
        register(definition: { id: string; name: string; author: string }) {
          registered = definition
          return () => undefined
        },
      },
      effect(factory: () => (() => void)) {
        dispose = factory()
      },
    }
    apply(ctx as never)

    expect(registered).toMatchObject({
      id: 'dsh-skin-asuka',
      name: 'dsh-skin-asuka',
      author: 'yujimaka',
    })
    expect(document.body.hasAttribute('data-dsh-asuka-interface')).toBe(false)
  })

  it('isolates settings colors from the dark sidebar', () => {
    expect(ASUKA_CSS).toContain("[data-slot='sidebar.settings']")
    expect(ASUKA_CSS).toContain('--dsw-alias-label-primary: #2a171a;')
    expect(ASUKA_CSS).toContain('--dsw-alias-bg-base: #f5efea;')
    expect(ASUKA_CSS).toContain('--dsw-alias-bg-base: #130a0d;')
  })

  it('keeps the hero artwork inside the viewport without the corner status label', () => {
    expect(ASUKA_CSS).toContain('right: clamp(18px, 2vw, 36px);')
    expect(ASUKA_CSS).toContain('bottom: clamp(12px, 1.6vh, 20px);')
    expect(ASUKA_CSS).toContain('height: min(88vh, 920px);')
    expect(ASUKA_CSS).toContain('prefers-reduced-motion: reduce')
    expect(ASUKA_CSS).not.toContain('UNIT-02 // COMMAND INTERFACE')
  })

  it('keeps active-chat artwork recognizable on wide screens and progressively quieter on narrow screens', () => {
    expect(ASUKA_CSS).toContain(":has(:is([data-phase='active'][data-chat-flow], [data-phase='active'] [data-chat-flow])) [data-asuka-character]")
    expect(ASUKA_CSS).toContain('opacity: 0.16;')
    expect(ASUKA_CSS).toContain('saturate(0.62)')
    expect(ASUKA_CSS).toContain('opacity: 0.1;')
    expect(ASUKA_CSS).toContain('opacity: 0.08;')
    expect(ASUKA_CSS).toContain('opacity: 0.05;')
  })
})
