import React from "react";
import { GiBookshelf } from "react-icons/gi";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { MdDashboardCustomize } from "react-icons/md";
import { SlLoop } from "react-icons/sl";
import { ImBook } from "react-icons/im";
import { IoIosSettings } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../actions/usersAction";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { fullname, role } = useSelector((state) => {
    return {
      fullname: state.usersReducer.fullname,
      role: state.usersReducer.role,
    };
  });

  const logoutButton = () => {
    dispatch(logoutAction());
    navigate("/login", { replace: true });
  };

  return (
    <Box
      bg="#040F16"
      display="grid"
      gridTemplateColumns={["1fr", "repeat(2, 1fr)", null, "repeat(3, 1fr)"]}
      h="75px"
      w="full"
      borderBottom="1px"
      borderColor="white"
      px={10}
      position="fixed"
      top={0}
      zIndex={1}
    >
      <Flex
        gap="3"
        justifyContent={["center", "flex-start"]}
        alignItems="center"
      >
        <Icon as={GiBookshelf} boxSize={8} color="white" />
        <Heading size="md" color="white">
          Library Labs
        </Heading>
      </Flex>
      <Box
        colSpan={2}
        gap={5}
        justifyContent="space-between"
        alignItems="center"
        display={["none", "none", "none", "flex"]}
      >
        <Link href="/">
          <Flex gap={3}>
            <Icon as={MdDashboardCustomize} mt={1} color="white" />
            <Text color="white">Dashboard</Text>
          </Flex>
        </Link>
        <Link>
          <Flex gap={3}>
            <Icon as={SlLoop} mt={1} color="white" />
            <Text color="white">Loan</Text>
          </Flex>
        </Link>
        <Link href="/books">
          <Flex gap={3}>
            <Icon as={ImBook} mt={1} color="white" />
            <Text color="white">Books</Text>
          </Flex>
        </Link>
        <Link>
          <Flex gap={3}>
            <Icon as={IoIosSettings} mt={1} color="white" />
            <Text color="white">Settings</Text>
          </Flex>
        </Link>
      </Box>
      <Box
        display={["none", "block"]}
        alignSelf="center"
        justifySelf="flex-end"
      >
        {props.loading ? (
          <Spinner />
        ) : fullname ? (
          <Menu>
            <MenuButton type="button">
              <Avatar name={fullname} size="md">
                <AvatarBadge boxSize="1em" bg="green.500" />
              </Avatar>
            </MenuButton>
            <MenuList textColor="black">
              <MenuItem>Cart</MenuItem>
              <MenuItem>Transaction</MenuItem>
              {role === "admin" ? (
                <MenuItem onClick={() => navigate("/admin", { replace: true })}>
                  Admin
                </MenuItem>
              ) : null}
              <MenuDivider />
              <MenuItem onClick={logoutButton}>
                Logout
                <Icon as={AiOutlineLogout} ms={1} mt={0.5} />
              </MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Button
            color="white"
            bg="#94B94B"
            onClick={() => navigate("/login", { replace: true })}
            style={{ width: 80 }}
          >
            Log In
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
