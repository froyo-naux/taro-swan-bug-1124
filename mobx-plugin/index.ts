import * as path from 'path'
import { isArray, isString } from '@tarojs/shared'

import type { IPluginContext, TaroPlatformBase } from '@tarojs/service'

export default function (ctx: IPluginContext) {
  ctx.registerMethod({
    name: 'onSetupClose',
    fn (platform: TaroPlatformBase) {
      const injectedPath = 'post:' + path.resolve(__dirname, './runtime.ts')
      if (isArray(platform.runtimePath)) {
        platform.runtimePath.push(injectedPath)
      } else if (isString(platform.runtimePath)) {
        platform.runtimePath = [platform.runtimePath, injectedPath]
      }
    }
  })
}
