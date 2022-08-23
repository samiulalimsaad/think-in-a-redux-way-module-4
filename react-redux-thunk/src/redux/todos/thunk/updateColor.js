import { SelectColor } from "../actions";

export const updateColorServer = (todoId, color) => async (dispatch) => {
    const res = await fetch(`http://localhost:4000/todos/${todoId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ color }),
    });
    const todo = await res.json();

    dispatch(SelectColor(todo.id, todo.color));
};
