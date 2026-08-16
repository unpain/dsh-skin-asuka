// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import vm from 'node:vm'
import { activateSkin, apply } from '../shared/runtime.js'

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

  it('registers without changing the page before selection', () => {
    let registered: { id: string; name: string } | undefined
    const ctx = {
      skinManager: {
        register(definition: { id: string; name: string }) {
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
    })
    expect(document.body.hasAttribute('data-dsh-asuka-interface')).toBe(false)
  })
})
