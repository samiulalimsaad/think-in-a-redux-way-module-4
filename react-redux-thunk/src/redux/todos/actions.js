import {
    ADDED,
    ALL_COMPLETED,
    CLEAR_COMPLETED,
    COLOR_SELECTED,
    DELETED,
    LOADED,
    TOGGLED,
} from "./actionTypes";

export const loadTodo = (todos) => ({ type: LOADED, payload: { todos } });

export const addTodo = (todo) => ({ type: ADDED, payload: { todo } });

export const ToggledTodo = (todoId) => ({ type: TOGGLED, payload: { todoId } });

export const SelectColor = (todoId, color) => ({
    type: COLOR_SELECTED,
    payload: { todoId, color },
});

export const DeleteTodo = (todoId) => ({
    type: DELETED,
    payload: { todoId },
});

export const completeAll = () => ({
    type: ALL_COMPLETED,
});

export const clearAll = () => ({
    type: CLEAR_COMPLETED,
});
