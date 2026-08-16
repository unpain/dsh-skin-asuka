import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')

/** Prebuilt skins must register a closure instead of shipping a browser ESM graph. */
function moduleBody(path) {
  return readFileSync(resolve(root, path), 'utf8')
    .replace(/^import .*$/gm, '')
    .replace(/export function /g, 'function ')
    .replace(/export const /g, 'const ')
    .trim()
}

const source = `window.__ModuleLoader__.load({
  id: "dsh-skin-asuka",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

${moduleBody('shared/art.js')}

${moduleBody('shared/theme-css.js')}

${moduleBody('shared/runtime.js')}

    exports.activateSkin = activateSkin;
    exports.apply = apply;
    exports.inject = inject;
    return module.exports;
  }
});
`

writeFileSync(resolve(root, 'lib/client.js'), source)
