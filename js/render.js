import { todoListTemplate } from './template.js';
import { $todoList, $todoCount, $all, $active, $completed } from './element.js';

const removeFocusAllTodoCount = () => {
  $all.classList.remove('selected');
  $active.classList.remove('selected');
  $completed.classList.remove('selected');
};

const todoCountText = (count) => {
  $todoCount.innerText = count;
};

export default {
  addTodoList(todo, count) {
    $todoList.insertAdjacentHTML('beforeend', todoListTemplate(todo));
    $todoCount.innerText = count;
  },

  removeTodo($todoLi) {
    $todoList.removeChild($todoLi);
    $todoCount.innerText -= 1;
  },

  toggleClassName($elem, className) {
    $elem.classList.toggle(className);
  },

  showAllTodoList(count) {
    removeFocusAllTodoCount();
    $all.classList.add('selected');
    document
      .querySelectorAll('#todo-list li')
      .forEach(($todo) => ($todo.style.display = 'block'));
    todoCountText(count);
  },

  showActiveTodoList(count) {
    removeFocusAllTodoCount();
    $active.classList.add('selected');
    document.querySelectorAll('#todo-list li').forEach(($todo) => {
      $todo.classList.contains('completed')
        ? ($todo.style.display = 'none')
        : ($todo.style.display = 'block');
    });
    todoCountText(count);
  },
};
