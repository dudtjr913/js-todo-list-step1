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

  const $inputTodo = document.querySelector('.new-todo');
  const $todoList = document.querySelector('#todo-list');
  const $todoCount = document.querySelector('.todo-count strong');
  const $all = document.querySelector('.all');
  const $active = document.querySelector('.active');
  const $completed = document.querySelector('.completed');

  const handleInputTodo = (e) => {
    if (e.key !== 'Enter') return;
    if (isAlreadyExistTodoName(todoList, e.target.value)) {
      alert('이미 존재하는 계획입니다.');
      return;
    }

    if (isBlankTodoName(e.target.value)) {
      alert('계획을 입력해주세요.');
      return;
    }

    addTodo(e.target.value);
    renderTodoList(e.target.value, todoList.length);
    e.target.value = '';
    $all.click();
  };

  const addTodo = (todo) => {
    todoList.push({ name: todo, completed: false });
  };

  const renderTodoList = (todo, count) => {
    $todoList.insertAdjacentHTML('beforeend', TEMPLATE(todo));
    $todoCount.innerText = count;
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
