// @flow

import ReactDom from "react-dom"
import { createElement as h, Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { routes } from "./conf/routes.js"

class App extends Component < any > {
  render() {
    return h(Router, null,
      h("div", null,
        routes.map((route, i) => {
          return h(Route, { key: i, ...route })
        })))
  }
}

const appNode = document.getElementById("app")
if (appNode !== null) {
  ReactDom.render(h(App), appNode)
}
