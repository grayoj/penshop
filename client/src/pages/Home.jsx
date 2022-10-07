import React from "react";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Message from "../components/Message";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Home = () => {
  return (
    <>
      <Message />
      <Navbar />
      <Carousel />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
