import { TEMPLATE } from './template.js';

export const renderTodoList = (todo, count) => {
  $todoList.insertAdjacentHTML('beforeend', TEMPLATE(todo));
  $todoCount.innerText = count;
};
