import React, { useState } from 'react'

import TodoStatus from '../TodoStatus'

import TodoList from '../component/TodoList'
import AddTaskForm from '../component/AddTodoForm'

import { genId } from '../idGenerator'

type HomeProps = {}
type HomeState = Todo[]

const initialState: HomeState = [
  {
    id: genId.next(),
    name: 'dishes',
    text: 'do the dishes',
    status: TodoStatus.ACTIVE
  },
  {
    id: genId.next(),
    name: 'doggy',
    text: 'walk the dog',
    status: TodoStatus.ACTIVE
  },
  {
    id: genId.next(),
    name: 'sleep',
    text: 'zzzz',
    status: TodoStatus.COMPLETED
  },
]


export default () => {
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

  const actions = {
    remove: removeTodo,
    toggle: toggleTodo,
    edit: editTodo,
  }

  return (
    <main className="home">
      <TodoList todos={todos} actions={actions}  />
      <AddTaskForm handleAddTodo={addTodo}/>
      <div className="actions">
        <button type="button" onClick={completeAllTodos}>All completed</button>
        <button type="button" onClick={removeCompleted}>Remove Completed</button>
      </div>
    </main>
  );
}