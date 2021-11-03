import { useCallback, useState, useMemo } from 'react'

import { genId } from './util/idGenerator'

import { Todo, TodoData, AddTodoData, EditTodoData, ViewModel, State } from './types/types'
import TodoStatus from './TodoStatus'

export function useViewModel(initialState: State): ViewModel {
  const [todos, setTodos] = useState(initialState);

  const filterTodos = useCallback((predicate: (todo: Todo) => boolean) => {
    setTodos(todos.filter(predicate));
  }, [todos]);

  const mapTodos = useCallback((mapfun: (todo: Todo, index: number) => Todo) => {
    setTodos(todos.map(mapfun));
  }, [todos]);

  const addTodo = useCallback((data: AddTodoData) => {
    const newTodo: Todo = {
      id: genId.next(),
      status: TodoStatus.ACTIVE,
      ...data
    };

    setTodos([...todos, newTodo]);
  }, [todos]);

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

  const getTodo = useCallback((id: number) => todos.find((todo) => todo.id === id), [todos]);

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

  const completeTodo = useCallback((id: number) => {
    setTodo(id, {
      status: TodoStatus.COMPLETED
    });
  }, [setTodo]);

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