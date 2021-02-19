import TodosApp from "./index.js"


const todosApp = new TodosApp();

export const conveyTodo = (todo) => {
  let errorMessage;
  if ((errorMessage = getTodoNameErrorMessage(todoList, todo))) {
    alert(errorMessage);
    return;
  }

  addTodo(todo);
  renderTodoList(todo, todoList.length);
};
