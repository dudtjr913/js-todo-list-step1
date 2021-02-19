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

  $inputTodo.addEventListener('keyup', (e) => {
    if (e.key !== 'Enter') return;

    const $todoList = document.querySelector('#todo-list');

    todoList.push(e.target.value);
    $todoList.insertAdjacentHTML('beforeend', TEMPLATE(e.target.value));
    e.target.value = ''
  });
};

todosApp();
