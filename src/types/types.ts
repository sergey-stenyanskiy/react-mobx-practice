import TodoStatus from '../TodoStatus'

export type Todo = {
  id: number
  name: string
  text: string
  status: TodoStatus
}

export type TodoData = Partial<Todo>

export type AddTodoData = Pick<Todo, 'name' | 'text'>

export type EditTodoData = AddTodoData

export type ViewModelActions = {
  toggle: (id: number) => void
  remove: (id: number) => void
  edit: (id: number, data: EditTodoData) => void
  completeAll: () => void
  removeCompleted: () => void
  add: (todoData: AddTodoData) => void
}

export type State = Todo[]

export type ViewModel = {
  todos: State
  actions: ViewModelActions
}

export type TodoActions = Pick<ViewModelActions, 'toggle' | 'remove' | 'edit'>

export type TodoListActions = {
  edit: () => void
  remove: () => void
}
