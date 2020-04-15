
import actionTypes from "../constant";
import {  takeLatest,put } from 'redux-saga/effects'


function* addtodo (action) {
  console.log('middleware', action)
  yield put({type: actionTypes.ADD_TODO, payload : action.payload})
}

export const todo = [
    takeLatest("S_"+actionTypes.ADD_TODO, addtodo),
   ]
  

