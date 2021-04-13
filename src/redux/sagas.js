import {put, takeLatest, all, call} from 'redux-saga/effects';
import {GET_TODO, successGetTodo, errorOnGetTodo} from './action.types';
import assert from 'assert';
import TodoService from '../services/Todo';

export function* helloSaga() {
  console.log('Hello Saga!');
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const allTodos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
];

export function* getTodos() {
  try {
    const {data} = yield call(TodoService.geTodo);
    console.log('SAGA TODO', 'getTodos', data.length);
    yield put(successGetTodo(data));
  } catch (error) {
    console.log('getTodos error', error);
    yield put(errorOnGetTodo(error));
  }
}

export function* watchAddTodo() {
  console.log('watchAddTodo');
  yield takeLatest(GET_TODO, getTodos);
}

// const iterator = getTodos();
// console.log('iterator', iterator);
// // iterator.next();
// // console.log('next', iterator.next().value);
// const result = iterator.next().value;
// assert.deepEqual(
//   result,
//   call(delay, 2000),
//   'é esperado uma chamada para delay com 2000\nEsperado: ' +
//     JSON.stringify(call(delay, 2000)) +
//     '\nResultado: ' +
//     JSON.stringify(result),
// );

export default function* rootSaga() {
  yield all([helloSaga(), watchAddTodo()]);
}
