const { default: fetch } = require("node-fetch");

exports.delayActionMiddleware = (store) => (next) => (action) => {
    if (action.type === "todo/added") {
        console.log("i'm delaying");
        setTimeout(() => {
            return next(action);
        }, 2000);
        return;
    }
    return next(action);
};

exports.fetchFromServer = (store) => (next) => async (action) => {
    if (action.type === "todo/fetch") {
        console.log("i'm delaying fro server response");
        const res = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=5"
        );
        const todos = await res.json();

        store.dispatch({ type: "todo/loaded", payload: { todos } });
        return;
    }
    return next(action);
};
