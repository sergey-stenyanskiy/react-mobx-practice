import { observable, action, computed } from 'mobx'
import TodoStatus from '../TodoStatus';

import { AddTodoData, State, Todo, TodoData, EditTodoData } from '../types/types'
import { genId } from '../util/idGenerator';

const EMPTY_TODOS: State = [];

export default observable(
  {
    todos: EMPTY_TODOS,
    filterTodos(predicate: (todo: Todo) => boolean) {
      if (this.todos.length > 0) {
        this.todos = this.todos.filter(predicate);
      }
    },
    mapTodos(mapFun: (todo: Todo, index: number) => Todo) {
      if (this.todos.length > 0) {
        this.todos = this.todos.map(mapFun);
      }
    },
    addTodo(data: AddTodoData) {
      const newTodo: Todo = {
        id: genId.next(),
        status: TodoStatus.ACTIVE,
        ...data
      };

      this.todos = [...this.todos, newTodo];
    },
    setTodo(id: number, data: TodoData) {
      this.mapTodos((todo) => {
        if (todo.id === id) {
          return { ...todo, ...data };
        }

        return todo;
      });
    },
    editTodo(id: number, data: EditTodoData) {
      this.setTodo(id, data);
    },
    removeTodo(id: number) {
      this.filterTodos((todo) => todo.id !== id);
    },
    toggleTodo(id: number) {
      this.mapTodos((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        const status = todo.status === TodoStatus.ACTIVE ? TodoStatus.COMPLETED : TodoStatus.ACTIVE;

        return {
          ...todo,
          status
        };
      });
    },
    completeAllTodos() {
      this.mapTodos((todo) => {
        if (todo.status === TodoStatus.COMPLETED) {
          return todo;
        }

        return {
          ...todo,
          status: TodoStatus.COMPLETED
        };
      });
    },
    removeCompleted() {
      this.filterTodos((todo) => todo.status !== TodoStatus.COMPLETED);
    },
    get actions() {
      return {
        add: this.addTodo,
        remove: this.removeTodo,
        toggle: this.toggleTodo,
        completeAll: this.completeAllTodos,
        removeCompleted: this.removeCompleted,
      }
    }
  },
  {
    todos: observable,
    filterTodos: action.bound,
    mapTodos: action.bound,
    completeAllTodos: action.bound,
    removeCompleted: action.bound,
    toggleTodo: action.bound,
    editTodo: action.bound,
    removeTodo: action.bound,
    addTodo: action.bound,
    setTodo: action.bound,
    actions: computed
  },
)