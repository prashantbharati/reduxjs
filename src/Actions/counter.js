export const Increment = () => {
  return {
    type: "Increase",
    payload: 1,
  };
};

export const Decrement = () => {
  return {
    type: "Decrease",
    payload: 1,
  };
};
