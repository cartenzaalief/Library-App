import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsTelephoneFill } from "react-icons/bs";
import { API_URL } from "../helper";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = (props) => {
  // Redirect page
  const navigate = useNavigate();

  // Show and hide password
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  // Input data register
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Register button
  const registerButton = () => {
    Axios.post(API_URL + "/users/register", {
      username,
      password,
      fullname,
      birthdate,
      gender,
      address,
      phone,
      email,
    })
      .then((res) => {
        alert(res.data.message);
        if (res.data.success) {
          navigate("/login", { replace: true });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container maxW={1000}>
      <VStack
        spacing={5}
        border={["", null, "1px"]}
        borderColor={["", null, "twitter.600"]}
        rounded="xl"
        p={10}
        mt="15vh"
      >
        <VStack spacing={3}>
          <Heading>Sign Up</Heading>
          <Text>Create a Library Labs account</Text>
        </VStack>

        {/* Responsive for desktop */}
        <Box w="full" display={["none", null, "block"]}>
          <HStack align="flex-start" spacing={10}>
            <VStack w="50%">
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  placeholder="Enter username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Full name</FormLabel>
                <Input
                  placeholder="Enter full name"
                  onChange={(e) => setFullname(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Phone</FormLabel>
                <InputGroup>
                  <InputRightElement
                    pointerEvents="none"
                    children={<BsTelephoneFill color="lightgray" />}
                  />
                  <Input
                    type="number"
                    placeholder="Enter phone number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Date of birth</FormLabel>
                <Input
                  placeholder="Select Date"
                  size="md"
                  type="date"
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </FormControl>
            </VStack>
            <VStack w="50%">
              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
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
              </FormControl>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input
                  placeholder="Enter address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                  placeholder="Enter e-mail"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Gender</FormLabel>
                <RadioGroup mt={4}>
                  <HStack spacing={10}>
                    <Radio
                      value="Male"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      Male
                    </Radio>
                    <Radio
                      value="Female"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      Female
                    </Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </VStack>
          </HStack>
        </Box>

        {/* Responsive for phone and tablet */}
        <Box display={["block", null, "none"]} w="full">
          <VStack>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
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
            </FormControl>
            <FormControl>
              <FormLabel>Full name</FormLabel>
              <Input
                placeholder="Enter full name"
                onChange={(e) => setFullname(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input
                placeholder="Enter address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Phone</FormLabel>
              <InputGroup>
                <InputRightElement
                  pointerEvents="none"
                  children={<BsTelephoneFill color="lightgray" />}
                />
                <Input
                  type="number"
                  placeholder="Enter phone number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input
                placeholder="Enter e-mail"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Date of birth</FormLabel>
              <Input
                placeholder="Select Date"
                size="md"
                type="date"
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup mt={4}>
                <HStack spacing={10}>
                  <Radio
                    value="Male"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    Male
                  </Radio>
                  <Radio
                    value="Female"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    Female
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
          </VStack>
        </Box>

        <Button w="100%" colorScheme="twitter" onClick={registerButton}>
          Sign Up
        </Button>
      </VStack>
    </Container>
  );
};

export default Register;
