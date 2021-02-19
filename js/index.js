const todosApp = () => {
  const todoList = [];

  const $inputTodo = document.querySelector('.new-todo');

  $inputTodo.addEventListener('keyup', (e) => {
    if (e.key !== 'Enter') return;

    todoList.push(e.target.value);
  });
};

todosApp();
