import { toggleTodoList, deleteTodoList } from './convey.js';
import { $todoList } from './element.js';

const handleTodoList = (e) => {
  const $todoLi = e.target.parentNode.parentNode;
  const $todoLabel = $todoLi.querySelector('.label');
  if (e.target.classList.contains('toggle')) {
    toggleTodoList($todoLi, $todoLabel.innerText);
    return;
  }
  if (e.target.classList.contains('destroy')) {
    deleteTodoList($todoLi, $todoLabel.innerText);
    return;
  }
};

$todoList.addEventListener('click', handleTodoList);
