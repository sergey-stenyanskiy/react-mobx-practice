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

declare module "*.svg" {
  const content: any;
  export default content;
}