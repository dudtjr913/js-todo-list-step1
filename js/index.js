import { $todoCount, $active, $all, $completed } from './element.js';
import {} from './todoInput.js';
import {} from './todoList.js';

export default function TodosApp() {
  let todoList = [];

  this.addTodo = (todo) => {
    todoList = [...todoList, { name: todo, completed: false }];
  };

  this.getTodoList = () => {
    return todoList;
  };

  this.revertCurrentTodoCompleted = (todoName) => {
    const currentTodo = todoList.find((todo) => todo.name === todoName);
    currentTodo.completed = !currentTodo.completed;
  };

  this.removeCurrentTodo = (todoName) => {
    todoList = todoList.filter((todo) => todo.name !== todoName);
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
