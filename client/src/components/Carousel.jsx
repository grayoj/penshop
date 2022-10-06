import styled from "styled-components";
import React, { useState } from "react";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { carouselItems } from "../exports";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.position === "left" && "10px"};
  right: ${(props) => props.position === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.9;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 2.0s ease-in;
  transform: translateX(${(props) => props.carouselIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgc};
`;
const PhotoContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const MsgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  padding: 51px;
  height: 80%;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Carousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const handleClick = (position) => {
    if (position === "left") {
      setCarouselIndex(carouselIndex > 0 ? carouselIndex - 1 : 2)      
    } else {
      setCarouselIndex(carouselIndex < 2 ? carouselIndex + 1 : 0)
    }

  };
  

  return (
    <Container>
      <Arrow position="left" onClick={() => handleClick("left")}>
        <ArrowBack />
      </Arrow>
      <Wrapper carouselIndex={carouselIndex}>
        {carouselItems.map((item) => (
          <Slide bgc={item.bgc}>
            <PhotoContainer>
              <Image src={item.img} />
            </PhotoContainer>
            <MsgContainer>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              <Button>Get Started</Button>
            </MsgContainer>
          </Slide>
        ))}
        ;
      </Wrapper>
      <Arrow position="right" onClick={() => handleClick("right")}>
        <ArrowForward />
      </Arrow>
    </Container>
  );
};

export default Carousel;
