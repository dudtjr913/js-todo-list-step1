export const isAlreadyExistTodoName = (todoList, name) => {
  return todoList.some((todo) => todo.name === name);
};

export const isBlankTodoName = (name) => {
  return !name;
};
