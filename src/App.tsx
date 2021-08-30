import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Home from "@/views/Home"

function App() {
  return (<Router>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>

    <Route path="/" component={Home} />
  </Router>)
}

export default App