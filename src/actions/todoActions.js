import * as types from '../constants/todoActionTypes'

export const addTodo = (text,date) => ({ type: types.ADD_TODO, text,date })
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const editTodoDate = (id, date) => ({ type: types.EDIT_TODO_DATE, id, date })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })

// export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter})