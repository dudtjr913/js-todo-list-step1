import {
  $todoList,
  $inputTodo,
  $todoCount,
  $active,
  $all,
  $completed,
} from './element.js';

const TEMPLATE = (todo) =>
  ` <li>
    <div>
      <input class="toggle" type="checkbox" />
      <label class="label">${todo}</label>
      <button class="destroy"></button>
    </div>
  </li>
`;

const todosApp = () => {
  const todoList = [];
  let errorMessage;

  const handleInputTodo = (e) => {
    if (e.key !== 'Enter') return;
    conveyTodo(e.target.value);
    e.target.value = '';
    $all.click();
  };

  const conveyTodo = (todo) => {
    if ((errorMessage = getTodoNameErrorMessage(todoList, todo))) {
      alert(errorMessage);
      return;
    }

    addTodo(todo);
    renderTodoList(todo, todoList.length);
  };

  const addTodo = (todo) => {
    todoList.push({ name: todo, completed: false });
  };

  const renderTodoList = (todo, count) => {
    $todoList.insertAdjacentHTML('beforeend', TEMPLATE(todo));
    $todoCount.innerText = count;
  };

  const getTodoNameErrorMessage = (todoList, name) => {
    if (isAlreadyExistTodoName(todoList, name)) {
      return '이미 존재하는 계획입니다.';
    }

    if (isBlankTodoName(name)) {
      return '계획을 입력해주세요.';
    }

    return '';
  };

  const isAlreadyExistTodoName = (todoList, name) => {
    return todoList.some((todo) => todo.name === name);
  };

  const isBlankTodoName = (name) => {
    return !name;
  };

  $inputTodo.addEventListener('keyup', handleInputTodo);

  $todoList.addEventListener('click', (e) => {
    const $todoLi = e.target.parentNode.parentNode;
    const $todoLabel = $todoLi.querySelector('.label');
    $todoLi.classList.toggle('completed');
    const todo = todoList.find((todo) => todo.name === $todoLabel.innerText);
    todo.completed = !todo.completed;
    if (e.target.classList.contains('destroy')) {
      $todoList.removeChild($todoLi);
      todoList.splice(
        todoList.findIndex((todo) => todo.name === $todoLabel.innerText),
        1,
      );
      $todoCount.innerText -= 1;
    }
  });

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
};
todosApp();
