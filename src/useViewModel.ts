import React, {useState} from 'react'

import {genId} from './util/idGenerator'

import {Todo, TodoData, AddTodoData, EditTodoData, ViewModel, State} from './types/types' 
import TodoStatus from './TodoStatus'

export function useViewModel(initialState: State): ViewModel {
  const [todos, setTodos] = useState(initialState);
  
  function filterTodos(predicate: (todo: Todo) => boolean) {
    setTodos(todos.filter(predicate));
  }

  function mapTodos(mapfun: (todo: Todo, index: number) => Todo) {
    setTodos(todos.map(mapfun));
  }

  function addTodo(data: AddTodoData) {
    const newTodo: Todo = {
      id: genId.next(),
      status: TodoStatus.ACTIVE,
      ...data
    }

    setTodos([...todos, newTodo]);
  }

  function editTodo(id: number, data: EditTodoData) {
    setTodo(id, data);
  }

  function removeTodo(id: number) {
    filterTodos(todo => todo.id !== id);
  }

  function getTodo(id: number) {
    return todos.find(todo => todo.id === id);
  }

  function setTodo(id: number, data: TodoData) {
    mapTodos(todo => {
      if (todo.id === id) {
        return {...todo, ...data};
      }

      return todo
    });
  }

  function toggleTodo(id: number) {
    mapTodos(todo => {
      if (todo.id === id) {
        const status = todo.status === TodoStatus.ACTIVE ? TodoStatus.COMPLETED : TodoStatus.ACTIVE;

        return {
          ...todo,
          status
        }
      }

      return todo;
    });
  }

  function completeTodo(id: number) {
    setTodo(id, {
      status: TodoStatus.COMPLETED
    });
  }

  function completeAllTodos() {
    mapTodos(todo => ({...todo, status: TodoStatus.COMPLETED}));
  }

  function removeCompleted() {
    filterTodos(todo => todo.status !== TodoStatus.COMPLETED);
  }

  return {
    todos,
    actions: {
      add: addTodo,
      edit: editTodo,
      remove: removeTodo,
      toggle: toggleTodo,
      completeAll: completeAllTodos,
      removeCompleted: removeCompleted
    }
  }
}