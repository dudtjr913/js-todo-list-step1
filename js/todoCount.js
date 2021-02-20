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
