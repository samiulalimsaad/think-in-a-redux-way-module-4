import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DoubleTick from "../assets/images/double-tick.png";
import NoteImage from "../assets/images/notes.png";
import PlusImage from "../assets/images/plus.png";
import { addTodo, clearAll, completeAll } from "../redux/todos/actions";

const Header = () => {
    const dispatch = useDispatch();

    const [input, setInput] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    };

    const handleCompleteAll = () => {
        dispatch(completeAll());
    };
    const handleClearAll = () => {
        dispatch(clearAll());
    };

    return (
        <div>
            <form
                onSubmit={handleAddTodo}
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
            >
                <img src={NoteImage} className="w-6 h-6" alt="Add todo" />
                <input
                    type="text"
                    placeholder="Type your todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${PlusImage}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li
                    className="flex space-x-1 cursor-pointer"
                    onClick={handleCompleteAll}
                >
                    <img className="w-4 h-4" src={DoubleTick} alt="Complete" />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={handleClearAll}>
                    Clear completed
                </li>
            </ul>
        </div>
    );
};

export default Header;
