import { loadTodo } from "../actions";

export const fetchTodos = async (dispatch) => {
    const res = await fetch("http://localhost:4000/todos");
    const todos = await res.json();

    dispatch(loadTodo(todos));
};
