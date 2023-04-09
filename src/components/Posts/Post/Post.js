import React from "react";
import { FaTrashAlt } from "react-icons/fa";
// import "./Todo.css";
import "./Post.css";
import { removeUser } from "../../../store/slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";
const Todo = ({ id, todotext, message }) => {
  const dispatch = useDispatch();
  return (
    <li className="todo">
      <span className="todotext">{todotext}</span>

      <span className="todotext">{message}</span>

      <span
        className="todo-icon"
        onClick={() => {
          dispatch(removeUser(id));
        }}
      >
        <FaTrashAlt />
      </span>
    </li>
  );
};

export default Todo;
