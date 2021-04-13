import axios from 'axios';

export const ADD_TODO = 'todos/todoAdd';
export const REMOVE_TODO = 'todos/remove';
export const GET_TODO = 'todos/get';
export const SUCCESS_TODO = 'todos/success';
export const ERROR_GET = 'todos/error';

export function requestTodo() {
  return {type: GET_TODO};
}

export function addTodo(title, completed) {
  return {type: ADD_TODO, payload: {title, completed}};
}

export function removeTodo(id) {
  return {type: REMOVE_TODO, payload: {id}};
}

export function successGetTodo(todos) {
  return {type: SUCCESS_TODO, payload: {todos}};
}

export function errorOnGetTodo(error) {
  return {type: ERROR_GET, payload: {error}};
}

// export const getTodos = () => async (dispacth, getState) => {
//   try {
//     const result = await axios.get(`${API}/todos`);
//     dispacth(successGetTodo(result.data));
//     console.log('api result', result.data.length);
//   } catch (error) {
//     console.log('error on request', error);
//   }
// };
