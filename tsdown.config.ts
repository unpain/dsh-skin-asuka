import { clientBundle } from './build/tsdown.client.ts'

export default clientBundle('dsh-skin-asuka', ['src/index.ts'], {
  portableCssModuleIds: true,
})
