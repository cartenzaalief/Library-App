import { Box, Button, Card, CardBody, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Books = (props) => {
  return (
    <Box bg="#040F16" p={100}>
      <Heading color="#94B94B">Books Pages</Heading>
      <Card mt={10} bg="#162026">
        <CardBody>
          <VStack>
            <Image
              src="https://www.gramedia.com/blog/content/images/2018/11/fantasticbeasts-1.jpg"
              h={300}
              align="center"
            />
            <Text color="white" fontSize="2xl" align="center">
              Book Title
            </Text>
            <Text mt={5} color="white">
              Genre
            </Text>
            <Text mt={2} color="white">
              Writer
            </Text>
            <Button bg="#94B94B" color="white" w="full">
              Loan
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Books;
