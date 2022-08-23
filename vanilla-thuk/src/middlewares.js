const { default: fetch } = require("node-fetch");
const { fetchTodos } = require("./functions");

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

exports.fetchFromServer = (store) => (next) => (action) => {
    if (typeof action === "function") {
        return action(store.dispatch, store.getState);
    }
    return next(action);
};
