const { default: fetch } = require("node-fetch");

exports.fetchAsync = async (dispatch, getState) => {
    const res = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    const todos = await res.json();

    dispatch({ type: "todo/loaded", payload: { todos } });
};
