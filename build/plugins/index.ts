import { PluginOption } from 'vite'

import reactRefresh from '@vitejs/plugin-react-refresh'
import svgBuilder from './svg-builder'

/**
 * Array of vite plugins to use.
 */
const plugins: (PluginOption | PluginOption[])[] = [
  // 热更新插件
  reactRefresh(),
  svgBuilder(),
]

export default plugins
