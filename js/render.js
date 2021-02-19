import { TEMPLATE } from './template.js';
import { $todoList, $todoCount } from './element.js';

export const renderTodoList = (todo, count) => {
  $todoList.insertAdjacentHTML('beforeend', TEMPLATE(todo));
  $todoCount.innerText = count;
};

export const toggleClassName = ($elem, className) => {
  $elem.classList.toggle(className);
};
