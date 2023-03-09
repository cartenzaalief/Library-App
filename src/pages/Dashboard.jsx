import React from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  Flex,
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
import { AiOutlineSearch, AiFillStar } from "react-icons/ai";

const Dashboard = (props) => {
  return (
    <Box bg="#040F16">
      {/* Box 1 */}
      <Box
        bgImage="url('https://assets.weforum.org/article/image/responsive_big_webp_hySrQhk9QgN45B-0z8PR0bd8ZRyDZ9LnvzPSGaIb91Q.webp')"
        bgSize="contain"
        py={100}
        px={10}
      >
        <Box
          bg="#040F16"
          borderRadius={20}
          p={10}
          maxW={700}
          m="auto"
        >
          <Text fontSize="2xl" fontWeight="bold" color="#94B94B">
            FIND BOOKS AND AUTHORS YOU LOVE AND DISCOVER MORE
          </Text>
          <InputGroup mt={30}>
            <Input bg="white" h={50} placeholder="Search for book or author" />
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

      {/* Box 2 */}
      <Box px={100} pt={100}>
        <Heading color="#94B94B">New Publications</Heading>
        <Grid
          mt={50}
          templateColumns={["1fr", null, "repeat(2, 1fr)", "repeat(4, 1fr)"]}
          gap={5}
        >
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

      {/* Box 3 */}
      <Box px={100} pt={150}>
        <Heading color="#94B94B">Frequently Borrowed</Heading>
        <Grid
          mt={50}
          templateColumns={["1fr", null, "repeat(2, 1fr)", "repeat(4, 1fr)"]}
          gap={5}
        >
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

      {/* Box 4 */}
      <Box px={100} py={100}>
        <Heading color="#94B94B" textAlign="center">
          Latest Book Reviews
        </Heading>
        <Grid
          mt={50}
          templateColumns={["1fr", null, null, "repeat(3, 1fr)"]}
          gap={10}
          justifySelf="center"
        >
          <GridItem>
            <Card
              bg="#162026"
              border="1px"
              borderStyle="dashed"
              borderColor="#94B94B"
            >
              <CardBody>
                <Flex justifyContent="space-between">
                  <Flex alignItems="center" gap={4}>
                    <Avatar />
                    <Text color="white">Username</Text>
                  </Flex>
                  <Flex alignItems="center">
                    <Icon as={AiFillStar} color="yellow" />
                    <Text color="white">5.0</Text>
                  </Flex>
                </Flex>
                <Text mt={5} color="white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                  mollitia, asperiores saepe dolores enim deserunt debitis hic
                  obcaecati sit dolor, cum vitae nobis non similique. Dolore
                  animi totam deleniti id.
                </Text>
                <Flex mt={5} justifyContent="space-between">
                  <Box>
                    <Text color="white">Book Title</Text>
                    <Text color="white">Writer</Text>
                  </Box>
                  <Image
                    src="https://www.gramedia.com/blog/content/images/2018/11/fantasticbeasts-1.jpg"
                    h={100}
                  />
                </Flex>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              bg="#162026"
              border="1px"
              borderStyle="dashed"
              borderColor="#94B94B"
            >
              <CardBody>
                <Flex justifyContent="space-between">
                  <Flex alignItems="center" gap={4}>
                    <Avatar />
                    <Text color="white">Username</Text>
                  </Flex>
                  <Flex alignItems="center">
                    <Icon as={AiFillStar} color="yellow" />
                    <Text color="white">5.0</Text>
                  </Flex>
                </Flex>
                <Text mt={5} color="white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                  mollitia, asperiores saepe dolores enim deserunt debitis hic
                  obcaecati sit dolor, cum vitae nobis non similique. Dolore
                  animi totam deleniti id.
                </Text>
                <Flex mt={5} justifyContent="space-between">
                  <Box>
                    <Text color="white">Book Title</Text>
                    <Text color="white">Writer</Text>
                  </Box>
                  <Image
                    src="https://www.gramedia.com/blog/content/images/2018/11/fantasticbeasts-1.jpg"
                    h={100}
                  />
                </Flex>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem>
            <Card
              bg="#162026"
              border="1px"
              borderStyle="dashed"
              borderColor="#94B94B"
            >
              <CardBody>
                <Flex justifyContent="space-between">
                  <Flex alignItems="center" gap={4}>
                    <Avatar />
                    <Text color="white">Username</Text>
                  </Flex>
                  <Flex alignItems="center">
                    <Icon as={AiFillStar} color="yellow" />
                    <Text color="white">5.0</Text>
                  </Flex>
                </Flex>
                <Text mt={5} color="white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                  mollitia, asperiores saepe dolores enim deserunt debitis hic
                  obcaecati sit dolor, cum vitae nobis non similique. Dolore
                  animi totam deleniti id.
                </Text>
                <Flex mt={5} justifyContent="space-between">
                  <Box>
                    <Text color="white">Book Title</Text>
                    <Text color="white">Writer</Text>
                  </Box>
                  <Image
                    src="https://www.gramedia.com/blog/content/images/2018/11/fantasticbeasts-1.jpg"
                    h={100}
                  />
                </Flex>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
