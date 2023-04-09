import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      console.log("reached added", action.payload);
      state.push(action.payload);
      return state;
    },
    removeUser(state, action) {
      return (state = state.filter((user) => user.id !== action.payload));
    },
  },
});

console.log(userSlice.actions);

export const { addUser } = userSlice.actions;
export const { removeUser } = userSlice.actions;

export default userSlice.reducer;
