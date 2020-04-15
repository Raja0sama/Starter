//Imports
import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import todoReducer, {todo} from './todo';
import logger from 'redux-logger'

//CombineState
reducers = combineReducers({
  todo: todoReducer,
});

//Middleware Combine
function* rootSaga() {
  yield all([...todo]);
}

// Initialize middleware
const sagaMiddleware = createSagaMiddleware();

// Create Store with Middleware
const store = createStore(reducers, applyMiddleware(sagaMiddleware,logger));

// run middleware
sagaMiddleware.run(rootSaga);

//Export Store
export default store;
