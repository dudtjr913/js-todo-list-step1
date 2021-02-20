import TodosApp from './index.js';
import { getTodoNameErrorMessage } from './validators/getMessage.js';
import render from './render.js';

const todosApp = new TodosApp();

export const conveyTodo = (todo) => {
  let errorMessage;
  if ((errorMessage = getTodoNameErrorMessage(todosApp.getTodoList(), todo))) {
    alert(errorMessage);
    return;
  }

  todosApp.addTodo(todo);
  render.addTodoList(todo, todosApp.getTodoList().length);
};

export const toggleTodoList = ($todoLi, todoName) => {
  todosApp.revertCurrentTodoCompleted(todoName);
  render.toggleClassName($todoLi, 'completed');
};

export const deleteTodoList = ($todoLi, todoName) => {
  todosApp.removeCurrentTodo(todoName);
  render.removeTodo($todoLi);
};

export const conveyAllTodo = () => {
  render.showAllTodoList(todosApp.getTodoList().length);
};

export const conveyActiveTodo = () => {
  const activeCount = todosApp
    .getTodoList()
    .filter(({ completed }) => !completed).length;
  render.showActiveTodoList(activeCount);
};

export const conveyCompletedTodo = () => {
  const completedCount = todosApp
    .getTodoList()
    .filter(({ completed }) => !!completed).length;
  render.showCompletedTodoList(completedCount);
};
