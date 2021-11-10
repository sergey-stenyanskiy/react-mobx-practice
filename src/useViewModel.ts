import { useCallback, useState, useMemo } from 'react'

import { genId } from './util/idGenerator'

import { Todo, TodoData, AddTodoData, EditTodoData, ViewModel, State } from './types/types'
import TodoStatus from './TodoStatus'

export function useViewModel(initialState: State): ViewModel {
  const [todos, setTodos] = useState(initialState);

  const filterTodos = useCallback((predicate: (todo: Todo) => boolean) => {
    setTodos((old) => old.filter(predicate));
  }, []);

  const mapTodos = useCallback((mapfun: (todo: Todo, index: number) => Todo) => {
    setTodos((old) => old.map(mapfun));
  }, []);

  const addTodo = useCallback((data: AddTodoData) => {
    const newTodo: Todo = {
      id: genId.next(),
      status: TodoStatus.ACTIVE,
      ...data
    };

    setTodos((old) => [...old, newTodo]);
  }, []);

  const setTodo = useCallback((id: number, data: TodoData) => {
    mapTodos((todo) => {
      if (todo.id === id) {
        return { ...todo, ...data };
      }

      return todo;
    });
  }, [mapTodos]);

  const editTodo = useCallback((id: number, data: EditTodoData) => {
    setTodo(id, data);
  }, [setTodo]);

  const removeTodo = useCallback((id: number) => {
    filterTodos((todo) => todo.id !== id);
  }, [filterTodos]);

  const toggleTodo = useCallback((id: number) => {
    mapTodos((todo) => {
      if (todo.id !== id) {
        return todo;
      }

      const status = todo.status === TodoStatus.ACTIVE ? TodoStatus.COMPLETED : TodoStatus.ACTIVE;

      return {
        ...todo,
        status
      };
    });
  }, [mapTodos]);

  const completeAllTodos = useCallback(() => {
    mapTodos((todo) => ({ ...todo, status: TodoStatus.COMPLETED }));
  }, [mapTodos]);

  const removeCompleted = useCallback(() => {
    filterTodos((todo) => todo.status !== TodoStatus.COMPLETED);
  }, [filterTodos]);

  const actions = useMemo(() => ({
    add: addTodo,
    edit: editTodo,
    remove: removeTodo,
    toggle: toggleTodo,
    completeAll: completeAllTodos,
    removeCompleted
  }), [addTodo, editTodo, removeTodo, toggleTodo, completeAllTodos, removeCompleted])

  return {
    todos,
    actions
  }
}