import { combineReducers } from "redux";
import { filterReducer } from "./filters/reducer";
import { todoReducer } from "./todos/reducer";

export const rootReducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
});
