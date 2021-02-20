import { $todoCount, $active, $all, $completed } from './element.js';
import {} from './todoInput.js';
import {} from './todoList.js';
import {} from './todoCount.js';

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
}
