import React from "react";
import ReactDOM from "react-dom";
import App from '@/App'

// legacy 传统模式
// ReactDOM.render(<h1>18之前render写法</h1>, document.getElementById("root"))

// version 18 启用并发渲染模式
ReactDOM.createRoot(document.getElementById("root")!).render(<App />)
