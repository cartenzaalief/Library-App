import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verification from "./pages/Verification";
import PageNotFound from "./pages/PageNotFound";
import DashboardAdmin from "./pages/DashboardAdmin";
import Books from "./pages/Books";
import BooksModify from "./pages/BooksModify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Axios from "axios";
import { API_URL } from "./helper";
import { loginAction } from "./actions/usersAction";
import { Box } from "@chakra-ui/react";

function App() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const { username, role } = useSelector((state) => {
    return {
      username: state.usersReducer.username,
      role: state.usersReducer.role,
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
      <Box mt="75px">
        <Routes>
          {!show ? null : username ? null : (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/books" element={<Books />} />
          {!show ? null : role === "admin" ? (
            <>
              <Route path="/admin" element={<DashboardAdmin />} />
              <Route path="/booksmodify" element={<BooksModify />} />
            </>
          ) : null}
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
