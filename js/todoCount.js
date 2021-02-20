import { conveyAllTodo } from './convey.js';
import { $todoCount, $active, $completed, $all } from './element.js';

const handleAllView = () => {
  conveyAllTodo();
};

$all.addEventListener('click', handleAllView);

const handleActiveView = (e) => {
  $all.classList.remove('selected');
  $completed.classList.remove('selected');
  e.target.classList.add('selected');

  document.querySelectorAll('#todo-list li').forEach(($todo) => {
    $todo.classList.contains('completed')
      ? ($todo.style.display = 'none')
      : ($todo.style.display = 'block');
  });

  $todoCount.innerText = todoList.filter(({ completed }) => !completed).length;
};

$active.addEventListener('click', handleActiveView);
