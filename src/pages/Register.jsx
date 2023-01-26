import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
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
        console.log(res.data);
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
    <Box p={50} bg="#040F16">
      <Container maxW={900}>
        <VStack bg="#162026" spacing={5} rounded="xl" p={10}>
          <VStack spacing={3}>
            <Heading color="white">Sign Up</Heading>
            <Text color="white">Create Library Labs account</Text>
          </VStack>

          {/* Responsive for desktop */}
          <Box w="full" display={["none", null, "block"]}>
            <HStack align="flex-start" spacing={10}>
              <VStack w="50%">
                <FormControl>
                  <FormLabel color="white">Username</FormLabel>
                  <Input
                    bg="white"
                    placeholder="Enter username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color="white">Full name</FormLabel>
                  <Input
                    bg="white"
                    placeholder="Enter full name"
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color="white">Phone</FormLabel>
                  <InputGroup>
                    <Input
                      bg="white"
                      type="number"
                      placeholder="Enter phone number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <InputRightElement
                      pointerEvents="none"
                      children={
                        <Icon as={BsTelephoneFill} color="lightgray" me={4} />
                      }
                    />
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel color="white">Date of birth</FormLabel>
                  <Input
                    bg="white"
                    placeholder="Select Date"
                    size="md"
                    type="date"
                    onChange={(e) => setBirthdate(e.target.value)}
                  />
                </FormControl>
              </VStack>
              <VStack w="50%">
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
                </FormControl>
                <FormControl>
                  <FormLabel color="white">Address</FormLabel>
                  <Input
                    bg="white"
                    placeholder="Enter address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color="white">E-mail</FormLabel>
                  <Input
                    bg="white"
                    placeholder="Enter e-mail"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color="white">Gender</FormLabel>
                  <RadioGroup mt={4}>
                    <HStack spacing={10}>
                      <Radio
                        bg="white"
                        value="Male"
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <Text color="white">Male</Text>
                      </Radio>
                      <Radio
                        bg="white"
                        value="Female"
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <Text color="white">Female</Text>
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
              </FormControl>
              <FormControl>
                <FormLabel color="white">Full name</FormLabel>
                <Input
                  bg="white"
                  placeholder="Enter full name"
                  onChange={(e) => setFullname(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="white">Address</FormLabel>
                <Input
                  bg="white"
                  placeholder="Enter address"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="white">Phone</FormLabel>
                <InputGroup>
                  <InputRightElement
                    pointerEvents="none"
                    children={
                      <Icon as={BsTelephoneFill} color="lightgray" me={4} />
                    }
                  />
                  <Input
                    bg="white"
                    type="number"
                    placeholder="Enter phone number"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel color="white">E-mail</FormLabel>
                <Input
                  bg="white"
                  placeholder="Enter e-mail"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="white">Date of birth</FormLabel>
                <Input
                  bg="white"
                  placeholder="Select Date"
                  size="md"
                  type="date"
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel color="white">Gender</FormLabel>
                <RadioGroup mt={4}>
                  <HStack spacing={10}>
                    <Radio
                      bg="white"
                      value="Male"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <Text color="white">Male</Text>
                    </Radio>
                    <Radio
                      bg="white"
                      value="Female"
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <Text color="white">Female</Text>
                    </Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>
            </VStack>
          </Box>

          <Button w="100%" color="white" bg="#94B94B" onClick={registerButton}>
            Sign Up
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default Register;
