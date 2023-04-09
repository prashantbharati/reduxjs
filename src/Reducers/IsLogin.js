const IsLogged = (state = false, action) => {
  switch (action.type) {
    case "Sign IN":
      return true;
    case "Sign out":
      return false;
    default:
      return false;
  }
};

export default IsLogged;
