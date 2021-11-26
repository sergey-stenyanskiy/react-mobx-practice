import { observable, action, makeObservable } from 'mobx'
import TodoStatus from '../TodoStatus';

import { AddTodoData, State, Todo, TodoData, EditTodoData } from '../types/types'
import { genId } from '../util/idGenerator';

const EMPTY_TODOS: State = [];

class TodoStore {
  todos = EMPTY_TODOS

  constructor() {
    makeObservable(this, {
      todos: observable,
      completeAllTodos: action.bound,
      removeCompleted: action.bound,
      toggleTodo: action.bound,
      editTodo: action.bound,
      removeTodo: action.bound,
      addTodo: action.bound,
      setTodo: action.bound,
    })
  }

  addTodo(data: AddTodoData) {
    const newTodo: Todo = {
      id: genId.next(),
      status: TodoStatus.ACTIVE,
      ...data
    };

    this.todos.push(newTodo);
  }

  setTodo(id: number, data: TodoData) {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      this.todos[index] = { ...this.todos[index], ...data };
    }
  }

  editTodo(id: number, data: EditTodoData) {
    this.setTodo(id, data);
  }

  removeTodo(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  toggleTodo(id: number) {
    const index = this.todos.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      const status = this.todos[index].status === TodoStatus.ACTIVE
        ? TodoStatus.COMPLETED
        : TodoStatus.ACTIVE;

      this.todos[index] = { ...this.todos[index], status };
    }
  }

  completeAllTodos() {
    for (const todo of this.todos) {
      todo.status = TodoStatus.COMPLETED;
    }
  }

  removeCompleted() {
    const idsToRemove: number[] = [];

    for (const todo of this.todos) {
      if (todo.status === TodoStatus.COMPLETED) {
        idsToRemove.push(todo.id);
      }
    }

    for (const id of idsToRemove) {
      this.removeTodo(id);
    }
  }
}

export default TodoStore