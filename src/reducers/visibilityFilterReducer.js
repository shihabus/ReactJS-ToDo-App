import {
    TODOS_TO_DO,
    TODOS_DONE,
    ALL_TODOS
} from '../constants/todoActionTypes'

const initialState = {
    filteredTodos: {},
}

export default function visibilityFilter(state = initialState, action){
    const {todos}=action
    switch (action.type) {
        case ALL_TODOS:
            return todos

        case TODOS_TO_DO:
            return todos.filter(todo => !todo.completed)

        case TODOS_DONE:
            return todos.filter(todo => todo.completed)

        default:
            return state
    }

}
