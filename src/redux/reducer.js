import {ADD_TODO, ERROR_GET, REMOVE_TODO, SUCCESS_TODO} from './action.types';

const initialState = {
  lastId: 0,
  data: [{id: 0, title: 'Learn React', completed: true}],
  error: null,
};

export const selectTodos = state => state.todos.data;

export const selectTodosError = state => state.todos.error;

export default function todoReducer(state = initialState, action) {
  console.info('todoReducer', action.type);
  switch (action.type) {
    case ADD_TODO: {
      const newId = state.lastId + 1;
      return {
        data: [...state.data, {...action.payload, id: newId}],
        lastId: newId,
      };
    }
    case REMOVE_TODO: {
      const newTodos = [];
      state.data.map(todo => {
        if (todo.id !== action.payload.id) {
          newTodos.push(todo);
        }
      });
      const newId = state.lastId - 1;
      return {lastId: newId, data: newTodos};
    }
    case SUCCESS_TODO: {
      console.log('SUCCESS_TODO', action);
      return {data: action.payload.todos, lastId: -1};
    }
    case ERROR_GET: {
      return {...state, error: action.payload.error};
    }
    default:
      return state;
  }
}
