import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor, changeStatus } from "../redux/filters/actions";

const numberOfTodos = (todoLength) => {
    switch (todoLength) {
        case 0:
            return "No task";
        case 1:
            return "1 task";

        default:
            return `${todoLength} tasks`;
    }
};

const Footer = () => {
    const todos = useSelector((state) => state.todos);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    const remainingTodo = todos.filter((todo) => !todo.completed).length;

    const handleStatusChange = (status) => {
        dispatch(changeStatus(status));
    };

    const handleColorChange = (color) => {
        if (filter.colors.includes(color)) {
            dispatch(changeColor(color, "removed"));
        } else {
            dispatch(changeColor(color, "added"));
        }
    };

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(remainingTodo)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li
                    className={`cursor-pointer ${
                        filter.status === "all" && "font-bold"
                    }`}
                    onClick={() => handleStatusChange("all")}
                >
                    All
                </li>
                <li>|</li>
                <li
                    className={`cursor-pointer ${
                        filter.status === "incompleted" && "font-bold"
                    }`}
                    onClick={() => handleStatusChange("incompleted")}
                >
                    Incomplete
                </li>
                <li>|</li>
                <li
                    className={`cursor-pointer ${
                        filter.status === "completed" && "font-bold"
                    }`}
                    onClick={() => handleStatusChange("completed")}
                >
                    Complete
                </li>
                <li>|</li>
                <li
                    className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
                        filter.colors.includes("green") && "bg-green-500"
                    }`}
                    onClick={() => handleColorChange("green")}
                ></li>
                <li
                    className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer  ${
                        filter.colors.includes("red") && "bg-red-500"
                    }`}
                    onClick={() => handleColorChange("red")}
                ></li>
                <li
                    className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer  ${
                        filter.colors.includes("yellow") && "bg-yellow-500"
                    }`}
                    onClick={() => handleColorChange("yellow")}
                ></li>
            </ul>
        </div>
    );
};

export default Footer;
