import {
  conveyActiveTodo,
  conveyAllTodo,
  conveyCompletedTodo,
} from './convey.js';
import { $active, $completed, $all } from './element.js';

const handleAllView = () => {
  conveyAllTodo();
};

$all.addEventListener('click', handleAllView);

const handleActiveView = () => {
  conveyActiveTodo();
};

$active.addEventListener('click', handleActiveView);

const handleCompletedView = () => {
  conveyCompletedTodo();
};

$completed.addEventListener('click', handleCompletedView);
