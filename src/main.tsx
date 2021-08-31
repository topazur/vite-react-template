import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/App'

/**
 * 两种方式注册雪碧图: 使用官方文档推荐的
 * 所有svg的symbolId集合: import ids from 'virtual:svg-icons-names';
 */
import 'virtual:svg-icons-register'
// import 'vite-plugin-svg-icons/register';

// legacy 传统模式
// ReactDOM.render(<h1>18之前render写法</h1>, document.getElementById("root"))

// version 18 启用并发渲染模式
ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
