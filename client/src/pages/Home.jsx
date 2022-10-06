import React from "react";
import Carousel from "../components/Carousel";
import Message from "../components/Message";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Message />
      <Navbar />
      <Carousel />
    </>
  );
};

export default Home;
