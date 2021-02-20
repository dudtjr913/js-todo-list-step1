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
  $all.classList.remove('selected');
  $active.classList.remove('selected');
  e.target.classList.add('selected');

  document.querySelectorAll('#todo-list li').forEach(($todo) => {
    $todo.classList.contains('completed')
      ? ($todo.style.display = 'block')
      : ($todo.style.display = 'none');
  });

  $todoCount.innerText = todoList.filter(({ completed }) => !!completed).length;
};
