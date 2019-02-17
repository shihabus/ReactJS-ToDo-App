import { combineReducers } from "redux";
import todos from './todoReducer';
import filteredTodos from './visibilityFilterReducer';

const rootReducer=combineReducers({
    todos,
    filteredTodos
})

export default rootReducer;