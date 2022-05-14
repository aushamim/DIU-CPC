import React from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../../Hooks/useDocumentTitle";

const Home = () => {
  useDocumentTitle("Computer Programming Club - DIU");
  return (
    <div>
      Home
      <br />
      <br />
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/user">user</Link>
    </div>
  );
};

export default Home;
