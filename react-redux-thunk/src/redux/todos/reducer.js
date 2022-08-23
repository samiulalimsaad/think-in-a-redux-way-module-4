import {
    ADDED,
    ALL_COMPLETED,
    CLEAR_COMPLETED,
    COLOR_SELECTED,
    DELETED,
    TOGGLED,
} from "./actionTypes";

const initialState = [
    {
        id: 1,
        text: "Lear React JS",
        completed: true,
    },
    {
        id: 2,
        text: "Lear Redux",
        completed: false,
        color: "red",
    },
];

const nextId = (state) =>
    state.reduce((id, obj) => Math.max(id, obj.id), -1) + 1;

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
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
