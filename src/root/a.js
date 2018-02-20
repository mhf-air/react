import { createElement as h, Component } from "react"
import { Link } from "react-router-dom"

export class Root extends Component {
  render() {
    return h("div", null,
      h(Link, { to: "/about" }, "about"),
    )
  }
}
