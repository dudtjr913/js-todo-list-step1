import { TEMPLATE } from './template.js';
import { $todoList, $todoCount } from './element.js';

export const renderTodoList = (todo, count) => {
  $todoList.insertAdjacentHTML('beforeend', TEMPLATE(todo));
  $todoCount.innerText = count;
};

export const removeTodo = ($todoLi) => {
  $todoList.removeChild($todoLi);
  $todoCount.innerText -= 1;
};

export const toggleClassName = ($elem, className) => {
  $elem.classList.toggle(className);
};
