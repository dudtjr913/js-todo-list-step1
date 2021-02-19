const todosApp = () => {
  const todoList = [];
  const TEMPLATE = (todo) =>
    ` <li>
        <div>
          <input class="toggle" type="checkbox" />
          <label class="label">${todo}</label>
          <button class="destroy"></button>
        </div>
      </li>
  `;

  const $inputTodo = document.querySelector('.new-todo');
  const $todoList = document.querySelector('#todo-list');
  const $todoCount = document.querySelector('.todo-count strong');
  const $all = document.querySelector('.all');
  const $active = document.querySelector('.active');
  const $completed = document.querySelector('.completed');

  $inputTodo.addEventListener('keyup', (e) => {
    if (e.key !== 'Enter') return;

    todoList.push(e.target.value);
    $todoList.insertAdjacentHTML('beforeend', TEMPLATE(e.target.value));
    $todoCount.innerText = todoList.length;
    e.target.value = '';
  });

  $todoList.addEventListener('change', (e) => {
    const $todoLi = e.target.parentNode.parentNode;
    $todoLi.classList.toggle('completed');
  });

  $all.addEventListener('click', (e) => {
    $active.classList.remove('selected');
    $completed.classList.remove('selected');
    e.target.classList.add('selected');

    document
      .querySelectorAll('#todo-list li')
      .forEach(($todo) => ($todo.style.display = 'block'));
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
  });
};
todosApp();
