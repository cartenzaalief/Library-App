export const loginAction = (data) => {
  console.log("Data from component", data);
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};
