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

declare type ButtonPrimaryColors = "red" | "blue" | "white" | "transparent" | "green"
declare type ButtonTextColors = "white" | "black"

declare module "*.svg" {
  const content: any;
  export default content;
}