import { isAlreadyExistTodoName, isBlankTodoName } from './todoName.js';

export const getTodoNameErrorMessage = (todoList, name) => {
  if (isAlreadyExistTodoName(todoList, name)) {
    return '이미 존재하는 계획입니다.';
  }

  if (isBlankTodoName(name)) {
    return '계획을 입력해주세요.';
  }

  return '';
};
