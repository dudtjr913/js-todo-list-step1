import { $todoSubmitForm, $inputTodo, $all } from './element.js';
import { conveyTodo } from './convey.js';

const handleSubmitTodo = (e) => {
  e.preventDefault();
  conveyTodo($inputTodo.value);
  $inputTodo.value = ''
  $all.click();
};

$todoSubmitForm.addEventListener('submit', handleSubmitTodo);
