import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Dashboard = (props) => {
  return (
    <Box px={100} py={50} h="100vh">
      <Text fontSize="2xl" fontWeight="bold" color="#94B94B">
        FIND BOOKS AND AUTHORS YOU LOVE
      </Text>
      <Text fontSize="2xl" fontWeight="bold" color="#94B94B">
        AND DISCOVER MORE
      </Text>
    </Box>
  );
};

export default Dashboard;
