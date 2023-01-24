import React, { useState } from "react";
import {
  Text,
  Button,
  Input,
  RadioGroup,
  Radio,
  Stack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
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
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
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
      firstname,
      lastname,
      birthdate,
      gender,
      address,
      phone,
      email,
    })
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        navigate("/login", { replace: true });
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
      <div className="d-flex shadow rounded-4" style={{ width: 900 }}>
        <img
          className="rounded-start-4"
          src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGlicmFyeXxlbnwwfHwwfHw%3D&w=1000&q=80"
          alt=""
          style={{ height: 600 }}
        />
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <div style={{ width: 380 }}>
            <Text className="mt-4" fontSize="4xl" fontWeight="bold">
              Sign Up
            </Text>
            <Input
              className="mt-3"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
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
            <Input
              className="mt-2"
              placeholder="First name"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <Input
              className="mt-2"
              placeholder="Last name"
              onChange={(e) => setLastname(e.target.value)}
            />
            <div className="d-flex mt-2 gap-4">
              <div style={{ width: 225 }}>
                <Text>Date of Birth</Text>
                <Input
                  className="mt-2"
                  placeholder="Select Date"
                  size="md"
                  type="date"
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </div>
              <div style={{ width: 225 }}>
                <Text>Gender</Text>
                <RadioGroup className="mt-3">
                  <Stack direction="row" spacing={10}>
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
                  </Stack>
                </RadioGroup>
              </div>
            </div>
            <Input
              className="mt-2"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <InputGroup className="mt-2">
              <InputLeftElement
                pointerEvents="none"
                children={<BsTelephoneFill color="lightgray" />}
              />
              <Input
                type="tel"
                placeholder="Phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputGroup>
            <Input
              className="mt-2"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              className="mt-4"
              colorScheme="twitter"
              style={{ width: "100%" }}
              onClick={registerButton}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
