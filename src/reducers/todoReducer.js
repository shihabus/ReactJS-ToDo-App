import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  EDIT_TODO_DATE,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
  TODOS_TO_DO,
  TODOS_DONE,
  ALL_TODOS
} from '../constants/todoActionTypes'

const initialState = [
  {
    text: '',
    completed: false,
    id: 0,
    dueDate: ''
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text,
          dueDate: action.date
        }
      ]

    case DELETE_TODO:
      return state.filter(todo =>
        todo.id !== action.id
      )

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )

    case EDIT_TODO_DATE:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, dueDate: action.date } :
          todo
      )

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }))

    // case ALL_TODOS:
    //   return state

    // case TODOS_TO_DO:
    //   return state.filter(todo => !todo.completed)

    // case TODOS_DONE:
    //   return state.filter(todo => todo.completed)

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}