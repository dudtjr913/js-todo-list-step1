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
  const $all = document.querySelector('.all');
  const $active = document.querySelector('.active');
  const $completed = document.querySelector('.completed');

  $inputTodo.addEventListener('keyup', (e) => {
    if (e.key !== 'Enter') return;

    todoList.push(e.target.value);
    $todoList.insertAdjacentHTML('beforeend', TEMPLATE(e.target.value));
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

    document
      .querySelectorAll('#todo-list li.completed')
      .forEach(($completedTodo) => ($completedTodo.style.display = 'none'));
  });
};
todosApp();
