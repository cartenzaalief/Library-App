export const loginAction = (data) => {
  console.log("Data from component", data);
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

export const logoutAction = () => {
  localStorage.removeItem("librarylabs_login")
  return {
    type: "LOGOUT_SUCCESS"
  }
}
