import {
    ADDED,
    ALL_COMPLETED,
    CLEAR_COMPLETED,
    COLOR_SELECTED,
    DELETED,
    LOADED,
    TOGGLED,
} from "./actionTypes";

const initialState = [];

const nextId = (state) =>
    state.reduce((id, obj) => Math.max(id, obj.id), -1) + 1;

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADED:
            return action.payload.todos;

        case ADDED:
            return [
                ...state,
                {
                    id: nextId(state),
                    text: action.payload.todo,
                    completed: false,
                },
            ];

        case TOGGLED:
            return state.map((todo) => {
                if (todo.id === action.payload.todoId) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            });

        case COLOR_SELECTED:
            return state.map((todo) => {
                if (todo.id === action.payload.todoId) {
                    return {
                        ...todo,
                        color: action.payload.color,
                    };
                }
                return todo;
            });

        case DELETED:
            return state.filter((todo) => todo.id !== action.payload.todoId);

        case ALL_COMPLETED:
            return state.map((todo) => ({ ...todo, completed: true }));

        case CLEAR_COMPLETED:
            return state.filter((todo) => !todo.completed);

        default:
            return state;
    }
};
