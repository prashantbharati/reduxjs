import React from "react";
import { useSelector } from "react-redux";
// import Todo from "../ToDo/Todo";
import Post from "./Post/Post";

const Posts = ({ markthorugh, todos, deletetodo }) => {
  const users = useSelector((state) => {
    return state.user;
  });

  return (
    <div>
      {users.map((todo) => {
        return (
          <Post todotext={todo.title} message={todo.message} id={todo.id} />
        );
      })}
    </div>
  );
};

export default Posts;
