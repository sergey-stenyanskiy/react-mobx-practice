declare type Todo = {
  id: number
  name: string
  text: string
  status: TodoStatus
}

declare type TodoData = {
  [prop in keyof Todo]?: Todo[prop]
}

declare type AddTodoData = {
  name: Todo["name"]
  text: Todo["text"]
}

declare type EditTodoData = AddTodoData

declare type TodoActions = {
  toggle: (id: number) => void,
  remove: (id: number) => void,
  edit: (id: number, data: EditTodoData) => void,
}

declare type TodoListActions = {
  edit: () => void
  remove: () => void
}

declare type ButtonPrimaryColors = {
  [index: string]: string

  red: "#EB5757"
  green: "#27AE60"
  blue: "#3C4FF4"
  white: "white"
  transparent: "transparent"
}

declare type ButtonTextColors = {
  [index: string]: string

  white: "white"
  black: "black"
}

// declare module "*.svg" {
//   const content: any;
//   export default content;
// }

declare module "*.svg" {
  const ReactComponent: any;
  export default ReactComponent;
}

declare type HTMLButtonType = "button" | "submit" | "reset"