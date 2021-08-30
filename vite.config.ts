// 使用node内置对象，需安装类型声明：`@types/node` or `ts-node`
import path from "path"
import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"

/* https://vitejs.dev/config/ */
export default defineConfig({
  resolve: {
    /* NOTICE for alias */
    // [传递到@rollup/plugin-alias，不需要开头结尾斜杠](https://cn.vitejs.dev/config/#resolve-alias)
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    reactRefresh(),
  ],
})