import { $inputTodo, $all } from './element.js';
import { conveyTodo } from './convey.js';

$inputTodo.addEventListener('keyup', handleInputTodo);

const handleInputTodo = (e) => {
  if (e.key !== 'Enter') return;
  conveyTodo(e.target.value);
  e.target.value = '';
  $all.click();
};
