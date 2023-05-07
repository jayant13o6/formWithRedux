import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        {" "}
        <h2>Welcome </h2>
      </div>
      <Link to="/aboutUs"> About Us</Link>
      <br />
      <Link to="/contactUs"> Contact Us</Link>
    </>
  );
};

export default Home;
