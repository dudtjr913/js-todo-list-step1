import { $todoCount, $active, $completed, $all } from './element.js';

const handleAllView = (e) => {
  $active.classList.remove('selected');
  $completed.classList.remove('selected');
  e.target.classList.add('selected');

  document
    .querySelectorAll('#todo-list li')
    .forEach(($todo) => ($todo.style.display = 'block'));

  $todoCount.innerText = todoList.length;
};

$all.addEventListener('click', handleAllView);
