import React from "react";
import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import duvet from "../images/download.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background-color: #e3e6e6;
  overflow: hidden;
  /* opacity: 0.9; */
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20%;
  color: white;
  cursor: pointer;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 50vh;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 100%;
  /* width: 100%; */
  border-top: 0;
  box-shadow: 10px 20px 50px #0b0742;
  /* box-shadow: 0 0 5px 10px white ; */
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
`;
const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #0b0742;
  border: none;
  color: white;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosNewOutlinedIcon
          style={{ fontSize: "50px", opacity: "0.5" }}
        />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src={duvet} />
          </ImgContainer>
          <InfoContainer>
            <Title>LINGERIES DEAL</Title>
            <Desc>LET YOUR LINGERIES LINGER! 20% OFF FOR NEw ARRIVALS.</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src={duvet} />
          </ImgContainer>
          <InfoContainer>
            <Title>LINGERIES DEAL</Title>
            <Desc>LET YOUR LINGERIES LINGER! 20% OFF FOR NEw ARRIVALS.</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src={duvet} />
          </ImgContainer>
          <InfoContainer>
            <Title>LINGERIES DEAL</Title>
            <Desc>LET YOUR LINGERIES LINGER! 20% OFF FOR NEw ARRIVALS.</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowForwardIosOutlinedIcon
          style={{ fontSize: "50px", opacity: "0.5" }}
        />
      </Arrow>
    </Container>
  );
};

export default Slider;
