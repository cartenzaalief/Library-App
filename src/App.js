import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verification from "./pages/Verification";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Axios from "axios";
import { API_URL } from "./helper";
import { loginAction } from "./actions/usersAction";
import { Box, Spinner } from "@chakra-ui/react";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const { username } = useSelector((state) => {
    return {
      username: state.usersReducer.username,
    };
  });

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

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShow(true);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [show]);

  return (
    <Box>
      <Navbar loading={loading} />
      <Box mt="10vh">
        <Routes>
          {!show ? null : username ? null : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/verification" element={<Verification />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
