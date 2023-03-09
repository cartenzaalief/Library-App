import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import Axios from "axios";
import React, { useState } from "react";
import { API_URL } from "../helper";

const BooksModify = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [published, setPublished] = useState("");
  const [pages, setPages] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState(null);

  const addBookButton = () => {
    const formData = new FormData();
    formData.append("images", cover);
    formData.append(
      "data",
      JSON.stringify({ title, author, published, pages, description })
    );
    Axios.post(API_URL + "/books/addbook", formData)
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box bg="#040F16" p={100}>
      <Heading color="#94B94B">Edit Books Data</Heading>
      <VStack bg="#162026" p={10} mt={20} rounded="xl" spacing={5}>
        <Heading color="white">Add New Book</Heading>
        <FormControl>
          <FormLabel color="white">Title</FormLabel>
          <Input
            bg="white"
            placeholder="Enter book title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="white">Author</FormLabel>
          <Input
            bg="white"
            placeholder="Enter author name"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="white">Published</FormLabel>
          <Input
            bg="white"
            placeholder="Select published date"
            size="md"
            type="date"
            onChange={(e) => setPublished(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="white">Pages</FormLabel>
          <Input
            bg="white"
            placeholder="Enter book pages"
            onChange={(e) => setPages(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="white">Description</FormLabel>
          <Input
            bg="white"
            placeholder="Enter book description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <FormLabel color="white">Cover</FormLabel>
          <Input
            bg="white"
            type="file"
            onChange={(e) => setCover(e.target.files[0])}
          />
        </FormControl>
        <Button w="full" color="white" bg="#94B94B" onClick={addBookButton}>
          Add Book
        </Button>
      </VStack>
      <Heading color="#94B94B" mt={100}>
        Book List
      </Heading>
    </Box>
  );
};

export default BooksModify;
