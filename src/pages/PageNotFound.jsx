import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = (props) => {
  const navigate = useNavigate();
  navigate("/", { replace: true });
  return <></>;
};

export default PageNotFound;
