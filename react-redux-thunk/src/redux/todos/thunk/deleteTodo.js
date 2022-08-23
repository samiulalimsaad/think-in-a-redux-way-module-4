import { SelectColor } from "../actions";

export const deleteTodoServer = (todoId) => async (dispatch) => {
    const res = await fetch(`http://localhost:4000/todos/${todoId}`, {
        method: "DELETE",
    });

    dispatch(SelectColor(todoId));
};
