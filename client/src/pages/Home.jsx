import React from "react";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Message from "../components/Message";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Message />
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
    </>
  );
};

export default Home;
