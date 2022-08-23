const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
const { fetchTodos, fetchAsync } = require("./functions");
const { delayActionMiddleware, fetchFromServer } = require("./middlewares");

const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "todo/added":
            return {
                ...state,
                todos: [...state.todos, { title: action.payload.title }],
            };
        case "todo/loaded":
            return {
                ...state,
                todos: [...state.todos, ...action.payload.todos],
            };

        default:
            return state;
    }
};

const store = createStore(
    todoReducer,
    // applyMiddleware(delayActionMiddleware, fetchFromServer)
    applyMiddleware(thunk)
);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({ type: "todo/added", payload: { title: "Hello" } });
store.dispatch({ type: "todo/fetch" });
store.dispatch(fetchAsync);
