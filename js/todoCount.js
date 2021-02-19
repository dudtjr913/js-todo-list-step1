import { conveyAllTodo } from './convey.js';
import { $todoCount, $active, $completed, $all } from './element.js';

const handleAllView = () => {
  conveyAllTodo();
};

$all.addEventListener('click', handleAllView);
