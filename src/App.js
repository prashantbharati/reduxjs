import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment } from "./Actions/counter";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form";
const App = () => {
  // const counter = useSelector((state) => state?.counter);
  // console.log(counter);
  const dispatch = useDispatch();

  console.log(useSelector((state) => state));

  return (
    <div>
      <Form />
      <Posts />
    </div>
  );
};

export default App;
