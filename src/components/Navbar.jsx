import React from "react";
import { GiBookshelf } from "react-icons/gi";
import {
  Avatar,
  Button,
  Box,
  Flex,
  Heading,
  Icon,
  Link,
  Spinner,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { MdDashboardCustomize } from "react-icons/md";
import { SlLoop } from "react-icons/sl";
import { ImBook } from "react-icons/im";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../actions/usersAction";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { fullname } = useSelector((state) => {
    return {
      fullname: state.usersReducer.fullname,
    };
  });

  const logoutButton = () => {
    dispatch(logoutAction());
    navigate("/login", { replace: true });
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns={["repeat(2, 1fr)", null, null, "repeat(3, 1fr)"]}
      w="full"
      h="10vh"
      px="10"
      borderBottom="1px"
      borderColor="gray.300"
    >
      <Flex gap="3" alignItems="center">
        <Icon as={GiBookshelf} boxSize="8" color="skyblue" />
        <Heading size="md">Library Labs</Heading>
      </Flex>
      <Box
        colSpan="2"
        gap="5"
        justifyContent="space-between"
        alignItems="center"
        display={["none", "none", "none", "flex"]}
      >
        <Link href="/">
          <Flex gap="3">
            <Icon as={MdDashboardCustomize} mt="1" />
            <Text>Dashboard</Text>
          </Flex>
        </Link>
        <Link>
          <Flex gap="3">
            <Icon as={SlLoop} mt="1" />
            <Text>Loan</Text>
          </Flex>
        </Link>
        <Link>
          <Flex gap="3">
            <Icon as={ImBook} mt="1" />
            <Text>Books</Text>
          </Flex>
        </Link>
        <Link>
          <Flex gap="3">
            <Icon as={IoPeopleSharp} mt="1" />
            <Text>Members</Text>
          </Flex>
        </Link>
        <Link>
          <Flex gap="3">
            <Icon as={IoIosSettings} mt="1" />
            <Text>Settings</Text>
          </Flex>
        </Link>
      </Box>
      <Box alignSelf="center" justifySelf="flex-end">
        {props.loading ? (
          <Spinner />
        ) : fullname ? (
          <Menu>
            <MenuButton>
              <Avatar name={fullname} />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={logoutButton}>Log Out</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button
            colorScheme="twitter"
            variant="outline"
            onClick={() => navigate("/login", { replace: true })}
          >
            Log In
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
