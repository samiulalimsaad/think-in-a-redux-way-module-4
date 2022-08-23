import React from "react";
import { useSelector } from "react-redux";
import SingleTodo from "./SingleTodo";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const filter = useSelector((state) => state.filter);

    const filterByStatus = (todo) => {
        switch (filter.status) {
            case "completed":
                return todo.completed;

            case "incompleted":
                return !todo.completed;

            default:
                return todo;
        }
    };

    const filterByColors = (todo) => {
        if (filter.colors.length > 0) {
            return filter.colors.includes(todo?.color);
        }
        return true;
    };

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
                .filter(filterByStatus)
                .filter(filterByColors)
                .map((todo) => (
                    <SingleTodo key={todo.id} todo={todo} />
                ))}
        </div>
    );
};

export default TodoList;
