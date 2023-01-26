import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import Axios from "axios";
import { API_URL } from "../helper";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction } from "../actions/usersAction";

const Login = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        alert(res.data.message);
        if (res.data.success) {
          dispatch(loginAction(res.data.value));
          localStorage.setItem("librarylabs_login", res.data.value.token);
          navigate("/", { replace: true });
        } else {
          window.location.reload(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box py={100}>
      <Container>
        <VStack bg="#162026" rounded="xl" p={10}>
          <Heading color="white">Login</Heading>
          <Text color="white">Enter your username and password</Text>
          <FormControl>
            <FormLabel color="white">Username</FormLabel>
            <Input
              bg="white"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel color="white">Password</FormLabel>
            <InputGroup size="md">
              <Input
                bg="white"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  colorScheme="blackAlpha"
                  h="1.75rem"
                  size="sm"
                  onClick={handleClick}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormHelperText color="white">
              We'll never share your password
            </FormHelperText>
          </FormControl>
          <Button colorScheme="twitter" w="full" onClick={loginButton}>
            Log In
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Login;
