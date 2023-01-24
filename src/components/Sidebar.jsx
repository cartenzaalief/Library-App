import React from "react";
import { GiBookshelf } from "react-icons/gi";
import { Text, Avatar } from "@chakra-ui/react";
import { MdDashboardCustomize } from "react-icons/md";
import { SlLoop } from "react-icons/sl";
import { ImBook } from "react-icons/im";
import { IoPeopleSharp } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Button, Spinner } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { logoutAction } from "../actions/usersAction";

const Sidebar = (props) => {
  const dispatch = useDispatch();

  const { fullname } = useSelector((state) => {
    return {
      fullname: state.usersReducer.fullname,
    };
  });

  const logoutButton = () => {
    dispatch(logoutAction());
  };

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ width: "15vw", height: "100vh", background: "#F8F8F8" }}
    >
      <div className="d-flex my-5 gap-1">
        <GiBookshelf size={28} color="skyblue" />
        <Text fontSize="xl" fontWeight="bold">
          Library Labs
        </Text>
      </div>
      <div className="d-flex gap-3">
        <Avatar />
        <div>
          {fullname ? <Text>{fullname}</Text> : <Text>Fullname</Text>}
          <Text fontSize="sm">Librarian</Text>
        </div>
      </div>
      <div style={{ marginTop: 80 }}>
        <Link to="/">
          <div className="d-flex gap-3">
            <MdDashboardCustomize className="mt-1" />
            <Text>Dashboard</Text>
          </div>
        </Link>
        <div className="d-flex mt-3 gap-3">
          <SlLoop className="mt-1" />
          <Text>Library Loan</Text>
        </div>
        <div className="d-flex mt-3 gap-3">
          <ImBook className="mt-1" />
          <Text>Books</Text>
        </div>
        <div className="d-flex mt-3 gap-3">
          <IoPeopleSharp className="mt-1" />
          <Text>Members</Text>
        </div>
        <div className="d-flex gap-3" style={{ marginTop: 230 }}>
          <IoIosSettings className="mt-1" />
          <Text>Settings</Text>
        </div>
        {props.loading ? (
          <Spinner className="mt-4 ms-5" />
        ) : fullname ? (
          <Link to="/login">
            <Button
              className="mt-3"
              colorScheme="red"
              variant="outline"
              style={{ width: "100%" }}
              onClick={logoutButton}
            >
              Log Out
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button
              className="mt-3"
              colorScheme="twitter"
              variant="outline"
              style={{ width: "100%" }}
            >
              Log In
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
