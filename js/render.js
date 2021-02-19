import { TEMPLATE } from './template.js';
import { $todoList, $todoCount } from './element.js';

export default {
  addTodoList(todo, count) {
    $todoList.insertAdjacentHTML('beforeend', TEMPLATE(todo));
    $todoCount.innerText = count;
  },

  removeTodo($todoLi) {
    $todoList.removeChild($todoLi);
    $todoCount.innerText -= 1;
  },

  toggleClassName($elem, className) {
    $elem.classList.toggle(className);
  },
};
