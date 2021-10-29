import TodoStatus from '../TodoStatus'

export type Todo = {
  id: number
  name: string
  text: string
  status: TodoStatus
}

export type TodoData = Partial<Todo>

export type AddTodoData = Pick<Todo, "name" | "text">

export type EditTodoData = AddTodoData

export type TodoActions = {
  toggle: (id: number) => void,
  remove: (id: number) => void,
  edit: (id: number, data: EditTodoData) => void,
}

export type TodoListActions = {
  edit: () => void
  remove: () => void
}

export type ButtonPrimaryColors = {
  [index: string]: string

  red: "#EB5757"
  green: "#27AE60"
  blue: "#3C4FF4"
  white: "white"
  transparent: "transparent"
}

export type ButtonTextColors = {
  [index: string]: string

  white: "white"
  black: "black"
}

export type HTMLButtonType = "button" | "submit" | "reset"
