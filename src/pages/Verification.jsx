import { Button, Container, Heading, VStack } from "@chakra-ui/react";
import Axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../helper";

const Verification = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const confirmButton = () => {
    let token = location.search.split("=")[1];
    Axios.patch(
      API_URL + "/users/verified",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
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
    <Container maxW={1000}>
      <VStack mt="15vh" spacing={10}>
        <Heading>Please confirm your e-mail address!</Heading>
        <Button colorScheme="twitter" variant="outline" onClick={confirmButton}>
          Confirm E-mail
        </Button>
      </VStack>
    </Container>
  );
};

export default Verification;
