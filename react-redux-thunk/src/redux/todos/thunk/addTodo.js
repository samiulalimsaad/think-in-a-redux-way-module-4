import { addTodo } from "../actions";

export const addTodoServer = (text) => async (dispatch) => {
    const res = await fetch("http://localhost:4000/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ text, completed: false }),
    });
    const todo = await res.json();

    dispatch(addTodo(todo.text));
};
