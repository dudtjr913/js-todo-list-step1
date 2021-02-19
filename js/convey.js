import TodosApp from './index.js';
import { getTodoNameErrorMessage } from './validators/getMessage.js';
import { renderTodoList } from './render.js';

const todosApp = new TodosApp();

export const conveyTodo = (todo) => {
  let errorMessage;
  if ((errorMessage = getTodoNameErrorMessage(todosApp.getTodoList(), todo))) {
    alert(errorMessage);
    return;
  }

  todosApp.addTodo(todo);
  renderTodoList(todo, todosApp.getTodoList().length);
};

export const toggleTodoList = ($todoLi, todoName) => {
  $todoLi.classList.toggle('completed');
  const todo = todoList.find((todo) => todo.name === todoName);
  todo.completed = !todo.completed;
};

export const deleteTodoList = ($todoLi, todoName) => {
  $todoList.removeChild($todoLi);
  todoList.splice(
    todoList.findIndex((todo) => todo.name === todoName),
    1,
  );
  $todoCount.innerText -= 1;
};
