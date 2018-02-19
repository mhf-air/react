import { createElement as h, Component } from "react"
import ReactDom from "react-dom"

const appState = {
  //
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = appState
  }

  render() {
    return h("div", null, "hello react")
  }
}

ReactDom.render(h(App), document.getElementById("app"))
