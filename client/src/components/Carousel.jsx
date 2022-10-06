import styled from "styled-components";
import React from "react";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
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
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
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
  return (
    <Container>
      <Arrow position="left">
        <ArrowBack />
      </Arrow>
      <Wrapper>
        <Slide>
          <PhotoContainer>
            <Image src="https://i.ibb.co/DG69bQ4/2.png" />
          </PhotoContainer>
          <MsgContainer>
            <Title>Bonanza Sale</Title>
            <Description>
              Take advantage of this promo and start shopping.
            </Description>
            <Button>Get Started</Button>
          </MsgContainer>
        </Slide>
        <Slide>
          <PhotoContainer>
            <Image src="https://i.ibb.co/DG69bQ4/2.png" />
          </PhotoContainer>
          <MsgContainer>
            <Title>Bonanza Sale</Title>
            <Description>
              Take advantage of this promo and start shopping.
            </Description>
            <Button>Get Started</Button>
          </MsgContainer>
        </Slide>
        <Slide>
          <PhotoContainer>
            <Image src="https://i.ibb.co/DG69bQ4/2.png" />
          </PhotoContainer>
          <MsgContainer>
            <Title>Bonanza Sale</Title>
            <Description>
              Take advantage of this promo and start shopping.
            </Description>
            <Button>Get Started</Button>
          </MsgContainer>
        </Slide>
      </Wrapper>
      <Arrow position="right">
        <ArrowForward />
      </Arrow>
    </Container>
  );
};

export default Carousel;
