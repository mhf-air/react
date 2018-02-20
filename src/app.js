// @flow

import ReactDom from "react-dom"
import { createElement as h, Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { routes } from "./conf/routes.js"

class App extends Component < any > {
  constructor(props) {
    super(props)
  }

  render() {
    return h(Router, null,
      h("div", null,
        routes.map((route, i) => {
          return h(Route, { key: i, ...route })
        })))
  }
}

ReactDom.render(h(App), document.getElementById("app"))
