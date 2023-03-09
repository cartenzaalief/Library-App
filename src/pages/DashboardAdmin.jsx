import React from "react";
import { Box, Button, Grid, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const DashboardAdmin = (props) => {
  const navigate = useNavigate();

  return (
    <Box bg="#040F16" p={100}>
      <Heading color="#94B94B">Admin Modify</Heading>
      <Grid mt={20} gap={10}>
        <Button
          bg="#94B94B"
          color="white"
          h={100}
          onClick={() => navigate("/booksmodify", { replace: true })}
        >
          <Text fontSize="3xl">Books</Text>
        </Button>
        <Button bg="#94B94B" color="white" h={100}>
          <Text fontSize="3xl">Loan</Text>
        </Button>
        <Button bg="#94B94B" color="white" h={100}>
          <Text fontSize="3xl">Members</Text>
        </Button>
      </Grid>
    </Box>
  );
};

export default DashboardAdmin;
