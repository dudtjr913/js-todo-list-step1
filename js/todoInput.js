import { $inputTodo, $all } from './element.js';
import { conveyTodo } from './convey.js';

const handleInputTodo = (e) => {
  if (e.key !== 'Enter') return;
  conveyTodo(e.target.value);
  e.target.value = '';
  $all.click();
};

$inputTodo.addEventListener('keyup', handleInputTodo);
