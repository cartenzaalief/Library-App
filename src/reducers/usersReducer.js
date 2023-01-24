const INITIAL_STATE = {
  id: 0,
  userid: "",
  username: "",
  fullname: "",
  birthdate: "",
  gender: "",
  address: "",
  phone: "",
  email: "",
  password: "",
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  console.log("Data from action", action);
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
