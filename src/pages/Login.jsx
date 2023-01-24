import React, { useState } from "react";
import {
  Text,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import Axios from "axios";
import { API_URL } from "../helper";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();

  // Show and hide password
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // Input username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Login button
  const loginButton = () => {
    Axios.post(API_URL + "/users/login", {
      username,
      password,
    })
      .then((res) => {
        alert("Log In Success");
        console.log(res.data);
        localStorage.setItem("librarylabs_login", JSON.stringify(res.data));
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "85vw" }}
    >
      <div
        className="shadow rounded-4 p-5"
        style={{ width: 550, marginLeft: 100, marginRight: 100 }}
      >
        <Text fontSize="4xl" fontWeight="bold">
          Login
        </Text>
        <Text className="mt-4">Username</Text>
        <Input
          className="mt-2"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Text className="mt-2">Password</Text>
        <InputGroup className="mt-2" size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button
          className="mt-4"
          colorScheme="twitter"
          style={{ width: 100 }}
          onClick={loginButton}
        >
          Log In
        </Button>
      </div>
    </div>
  );
};

export default Login;
