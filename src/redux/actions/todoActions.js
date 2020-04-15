
import actionTypes from '../constant'

// Actions.


export const addTodo = (data) => ({ type : "S_"+actionTypes.ADD_TODO , payload : data  })
export const getTodo = () => ({type : actionTypes.GET_TODO })
export const deleteTodo = (id) => ({type : actionTypes.DELETE_TODO , payload : id })



