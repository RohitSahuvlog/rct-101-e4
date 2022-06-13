import React from "react";
import { Navigate } from "react-router-dom";

const Home = () => {

  return <div>
    <Navigate to={"/login"}/>
  </div>;
};

export default Home;
