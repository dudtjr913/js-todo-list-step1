import { conveyActiveTodo, conveyAllTodo } from './convey.js';
import { $todoCount, $active, $completed, $all } from './element.js';

const handleAllView = () => {
  conveyAllTodo();
};

$all.addEventListener('click', handleAllView);

const handleActiveView = () => {
  conveyActiveTodo();
};

$active.addEventListener('click', handleActiveView);

const handleCompletedView = () => {
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

$completed.addEventListener('click', handleCompletedView);
