## 一、npm

```bash
# https://www.jianshu.com/p/1a426b889bad
$ npm install -g create-react-app --registry=https://registry.npm.taobao.org
$ cd C:\Users\admin\AppData\Roaming\npm
$ rimraf .\create-react-app.ps1
```

## 二、create-react-app

[npm](https://www.npmjs.com/package/create-react-app) 、
[Document](https://create-react-app.dev/)

```bash
$ create-react-app [project]
$ cd [project]
$ yarn add react@alpha react-dom@alpha
```

## 三、vite+react 构建

### 3.1 vite 模板创建

```bash
$ ❎ yarn create @vitejs/app [project] --template react-ts
# @vitejs/create-app is deprecated, use yarn create vite instead
$ ✅ yarn create vite [project] --template react-ts

$ yarn add react@alpha react-dom@alpha
```

### 3.2 tsconfig.json

[vite typescript 相关配置](https://cn.vitejs.dev/guide/features.html#typescript)

```json
// vite 创建模板使用的默认配置：可能有些属性为了适配rollup，后续探索（TODO）
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": false,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
  },
  "include": ["./src"]
}
```

### 3.3 手动配置模块

```bash
$ mkdir [project] && cd [project]
$ yarn init -y
$ yarn add react@alpha react-dom@alpha
# plugin-react-refresh 支持react组件热更新，且不会因
$ yarn add vite typescript @vitejs/plugin-react-refresh  @types/react @types/react-dom -D
$ node ./node_modules/esbuild/install.js # ???

$ echo 'vite 读取入口：配置根节点及module script'>index.html
# [windows命令](https://jingyan.baidu.com/article/49ad8bceb0237f5834d8fa19.html)
$ echo 'export default {}'>vite.config.ts
$ tsc --init # 创建tsconfig.json
$ 配置package.json中的script

# 强制安装可使用 `-f`或`--force` 参数
$ yarn add react-router-dom @types/react-router-dom --force
```

#### svg 雪碧图

```bash
$ yarn add vite-plugin-svg-icons -D
# Usage: https://github.com/anncwb/vite-plugin-svg-icons

# 博客参考(addRoute、env、css预处理、alias、svg抽离plugins写法): https://blog.csdn.net/weixin_43368335/article/details/113868053
# [此博文对应仓库](https://github.com/lwm98/Vue3-Template)
```

#### eslint for alloy

```bash
# https://www.npmjs.com/package/eslint-config-alloy
# https://github.com/AlloyTeam/eslint-config-alloy
$ yarn add eslint-config-alloy -D

# [Rules配置 中文](https://alloyteam.github.io/eslint-config-alloy/?language=zh-CN)

# 由此博文了解到这个eslint规范：
# [Vite + React + Typescript 最佳实践](https://github.com/lichenbuliren/fe-project-base)
# [对应仓库]https://segmentfault.com/a/1190000039875183)
```
