import React from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

const Dashboard = (props) => {
  return (
    <Box bg="#040F16">
      <Box
        bgImage="url('https://assets.weforum.org/article/image/responsive_big_webp_hySrQhk9QgN45B-0z8PR0bd8ZRyDZ9LnvzPSGaIb91Q.webp')"
        bgSize="contain"
      >
        <Box
          w="60vw"
          bg="#040F16"
          ps={100}
          py={100}
          borderBottomRightRadius={500}
        >
          <Box w="80%">
            <Text fontSize="2xl" fontWeight="bold" color="#94B94B">
              FIND BOOKS AND AUTHORS YOU LOVE AND DISCOVER MORE
            </Text>
            <InputGroup mt={30}>
              <Input
                bg="white"
                h={50}
                placeholder="Search for book or author"
              />
              <InputRightElement h="full" w={20}>
                <Button color="white" bg="#94B94B" h="full" w="full">
                  <Icon as={AiOutlineSearch} boxSize={7} />
                </Button>
              </InputRightElement>
            </InputGroup>
            <Text color="white" mt={30}>
              Millions of high-quality books from all around the world and
              recommendations for you, get started to discover all now.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box px={100} pt={100}>
        <Heading color="#94B94B">New Publications</Heading>
        <Grid mt={50} px={100} templateColumns="repeat(4, 1fr)" gap={5}>
          <GridItem>
            <Card bg="#162026">
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
          </GridItem>
          <GridItem>
            <Card bg="#162026">
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
          </GridItem>
          <GridItem>
            <Card bg="#162026">
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
          </GridItem>
          <GridItem>
            <Card bg="#162026">
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
          </GridItem>
        </Grid>
      </Box>
      <Box px={100} py={100}>
        <Heading color="#94B94B">Frequently Borrowed</Heading>
        <Grid mt={50} px={100} templateColumns="repeat(4, 1fr)" gap={5}>
          <GridItem>
            <Card bg="#162026">
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
          </GridItem>
          <GridItem>
            <Card bg="#162026">
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
          </GridItem>
          <GridItem>
            <Card bg="#162026">
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
          </GridItem>
          <GridItem>
            <Card bg="#162026">
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
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
