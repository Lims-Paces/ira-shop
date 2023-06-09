import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// import duvet from "../images/download.jpg";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  font-family: "Work Sans", sans-serif;
  color: #0b0742;
  background-color: white;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  color: #0b0742;
  cursor: pointer;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-right: 10vw;
`;
const Image = styled.img`
  border-top: 0;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 20vh 10vw;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  font-size: 30px;
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
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((sliderItem) => (
          <Slide key={sliderItem.id} bg="slide1">
            <ImgContainer>
              <InfoContainer>
                <Title>{sliderItem.title}</Title>
                <Desc>{sliderItem.desc}</Desc>
                <Button>SHOP NOW</Button>
              </InfoContainer>
              <Image src={sliderItem.image} alt={sliderItem.alt} />
            </ImgContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewOutlinedIcon style={{ fontSize: "30px" }} />
      </Arrow>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosOutlinedIcon style={{ fontSize: "30px" }} />
      </Arrow>
    </Container>
  );
};

export default Slider;
