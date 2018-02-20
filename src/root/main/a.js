// @flow

import { createElement as h, Component } from "react"
import { Link } from "react-router-dom"
import { extendObservable, action } from "mobx"
import { observer } from "mobx-react"

class pageState {
  todoList: string[]
  todoLen: number
  addTodo: (string) => void
  deleteTodo: () => void

  constructor() {
    extendObservable(this, {
      todoList: ["a", "b", "c"],

      get todoLen() {
        return this.todoList.length
      },

      addTodo: action(function(todo) {
        this.todoList.push(todo)
      }),
      deleteTodo: action(function() {
        this.todoList.pop()
      }),
    })
  }
}

export const Main = observer(class a extends Component < any, pageState > {
  constructor(props) {
    super(props)
    this.state = new pageState()
  }

  render() {
    let state = this.state
    return h("div", null,
      h(Link, { to: "/about" }, "about"),
      h(TodoList, { state }),
      h("p", null, state.todoLen),
      h("button", { onClick: (e) => this.addTodo(e) }, "add todo"),
      h("button", { onClick: (e) => this.deleteTodo(e) }, "delete todo"),
    )
  }

  addTodo(e) {
    this.state.addTodo("hello")
  }

  deleteTodo(e) {
    this.state.deleteTodo()
  }

})

const TodoList = observer(class a extends Component < { state: pageState } > {
  render() {
    let state = this.props.state
    return h("ol", null,
      state.todoList.map((todo, i) => {
        return h("li", { key: i }, todo)
      }),
    )
  }
})
