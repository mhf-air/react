import React from "react"
import ReactDom from "react-dom"

const h = React.createElement

class App extends React.Component {
  render() {
    return h("div", null, "hello react")
  }
}

ReactDom.render(h(App), document.getElementById("app"))
