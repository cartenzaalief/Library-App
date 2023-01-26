import { Box, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { RiVisaLine } from "react-icons/ri";
import {
  FaCcMastercard,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box bottom={0}>
      <Box
        bg="#162026"
        display="grid"
        gridTemplateColumns={["1fr", null, null, "repeat(4, 1fr)"]}
        px={20}
        h="225px"
      >
        <Heading color="white" m="auto">
          Library Labs
        </Heading>
        <Box display={["none", "none", "none", "block"]} alignSelf="center">
          <VStack>
            <VStack align="flex-start">
              <Text color="white" fontSize="xl" fontWeight="bold">
                Information
              </Text>
              <Text color="white">Terms and Conditions</Text>
              <Text color="white">Privacy Policy</Text>
              <Text color="white">Customer Support</Text>
            </VStack>
          </VStack>
        </Box>
        <Box display={["none", "none", "none", "block"]} alignSelf="center">
          <VStack>
            <VStack align="flex-start">
              <Text color="white" fontSize="xl" fontWeight="bold">
                Contact Us
              </Text>
              <Flex gap={2}>
                <Icon as={FaFacebookSquare} color="white" boxSize={5} />
                <Text color="white">Facebook</Text>
              </Flex>
              <Flex gap={2}>
                <Icon as={FaTwitterSquare} color="white" boxSize={5} />
                <Text color="white">Twitter</Text>
              </Flex>
              <Flex gap={2}>
                <Icon as={FaInstagramSquare} color="white" boxSize={5} />
                <Text color="white">Instagram</Text>
              </Flex>
            </VStack>
          </VStack>
        </Box>
        <Box display={["none", "none", "none", "block"]} alignSelf="center">
          <VStack>
            <VStack align="flex-start">
              <Text color="white" fontSize="xl" fontWeight="bold">
                Partners
              </Text>
              <Icon as={RiVisaLine} color="white" boxSize={10} />
              <Icon as={FaCcMastercard} color="white" boxSize={10} />
            </VStack>
          </VStack>
        </Box>
      </Box>
      <Box
        h="35px"
        bg="#94B94B"
        py={2}
        display={["none", "flex"]}
        justifyContent="center"
        alignItems="center"
      >
        <Text color="white">
          This site is protected by Privacy Policy and Terms of Service apply.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
