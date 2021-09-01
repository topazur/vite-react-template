## [FAQ](https://next.mobile.ant.design/guide/faq)

- v2 已经是很久之前发布的版本了，最近两年在公司内部，我们开发了 v3 v4 两个版本，但最终并未发布到社区上，此次 v5 版本我们将同步发布到社区。

- 从 v2 如何迁移到 v5？

  > 为了降低迁移成本，你可以通过 `依赖别名` 的方式来安装 antd-mobile v5，同时保留 v2 版本

  ```bash
  $ npm install --save antd-mobile-v5@npm:antd-mobile@next
  # or
  $ yarn add antd-mobile-v5@npm:antd-mobile@next

  # 做到两个版本临时并存，从而可以逐步的替换组件
  import { Button } from 'antd-mobile' // v2
  import { Button } from 'antd-mobile-v5' // v5
  ```

- CSS 变量

  > 相比于粗暴的 CSS 样式覆盖（也被叫做魔改样式），CSS 变量让我们可以更加优雅地自定义组件的样式。

  ```tsx
  // 方法一：在 CSS 文件中设置
  // 给 Input 组件加一个自定义的 className：
  <Input className='my-input'/>
  // 然后在 CSS 文件中设置 CSS 变量
  .my-input {
    --font-size: 32px;
  }

  // 方法二：直接通过 style 属性设置
  // 直接通过组件的 style 属性，简单粗暴，适合小范围的调整：
  <Input style={{
    '--font-size': '32px'
  }}/>
  ```

- 主题
  > 得益于 CSS 变量强大而灵活的能力，自定义一套 antd-mobile 的主题是非常简单的，你不需要配置任何编译工具，也不需要安装额外的插件，直接在 :root 覆盖 CSS 变量就可以了

  [全局性 CSS 变量](https://next.mobile.ant.design/guide/theme)

- 按需加载

  ```tsx
  // 仍需要在入口文件中引入 global 文件来加载一些 antd-mobile 的全局性逻辑和样式
  import 'antd-mobile/es/global'
  ```


## [issues](https://github.com/ant-design/ant-design-mobile/issues)
