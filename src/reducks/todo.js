import {takeLatest, put} from 'redux-saga/effects';
// Constants
const ADD_TODO = 'ADD_TODO';
const GET_TODO = 'GET_TODO';
const DELETE_TODO = 'DELETE_TODO';

// Reducers
//Initial State
const initialState = {
  todo: [],
};

export default reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      state.todo.push({
        id: Math.random().toString(36).slice(2),
        todo: action.payload,
      });
      return {
        ...state,
      };
    }
    case GET_TODO: {
      return state;
    }
    case DELETE_TODO: {
      var index = state.todo
        .map((x) => {
          return x.id;
        })
        .indexOf(action.payload);
      state.todo.splice(index, 1);
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

// Middlewares
function* addtodo(action) {
  yield put({type: ADD_TODO, payload: action.payload});
}
export const todo = [takeLatest('_' + ADD_TODO, addtodo)];

// Actions
export const addTodo = (payload) => ({type: '_' + ADD_TODO, payload});
export const getTodo = () => ({type: GET_TODO});
export const deleteTodo = (payload) => ({type: DELETE_TODO, payload});
