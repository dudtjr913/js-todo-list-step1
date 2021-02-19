import { $todoList, $todoCount, $active, $all, $completed } from './element.js';
import {} from './inputTodo.js';

export default function TodosApp() {
  let todoList = [];

  this.addTodo = (todo) => {
    todoList = [...todoList, { name: todo, completed: false }];
  };

  this.getTodoList = () => {
    return todoList;
  };

  $all.addEventListener('click', (e) => {
    $active.classList.remove('selected');
    $completed.classList.remove('selected');
    e.target.classList.add('selected');

    document
      .querySelectorAll('#todo-list li')
      .forEach(($todo) => ($todo.style.display = 'block'));

    $todoCount.innerText = todoList.length;
  });

  $active.addEventListener('click', (e) => {
    $all.classList.remove('selected');
    $completed.classList.remove('selected');
    e.target.classList.add('selected');

    document.querySelectorAll('#todo-list li').forEach(($todo) => {
      $todo.classList.contains('completed')
        ? ($todo.style.display = 'none')
        : ($todo.style.display = 'block');
    });

    $todoCount.innerText = todoList.filter(
      ({ completed }) => !completed,
    ).length;
  });

  $completed.addEventListener('click', (e) => {
    $all.classList.remove('selected');
    $active.classList.remove('selected');
    e.target.classList.add('selected');

    document.querySelectorAll('#todo-list li').forEach(($todo) => {
      $todo.classList.contains('completed')
        ? ($todo.style.display = 'block')
        : ($todo.style.display = 'none');
    });

    $todoCount.innerText = todoList.filter(
      ({ completed }) => !!completed,
    ).length;
  });
}
