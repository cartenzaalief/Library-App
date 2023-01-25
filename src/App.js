import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Axios from "axios";
import { API_URL } from "./helper";
import { loginAction } from "./actions/usersAction";
import { Box } from "@chakra-ui/react";

function App() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const keepLogin = () => {
    let getLocalStorage = localStorage.getItem("librarylabs_login");
    console.log(getLocalStorage);
    if (getLocalStorage) {
      Axios.get(API_URL + "/users/keep", {
        headers: {
          Authorization: `Bearer ${getLocalStorage}`,
        },
      })
        .then((res) => {
          dispatch(loginAction(res.data));
          setLoading(false);
          localStorage.setItem("attendance_login", res.data.token);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <Box>
      <Navbar loading={loading} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Box>
  );
}

export default App;
