import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "Work Sans", sans-serif;
  font-size: 70px;
  margin: 0;
`;

const Description = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 24px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  margin-top: 15px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding-left: 20px;
  flex: 8;
`;

const Button = styled.button`
  flex: 1;
  background-color: #0b0742;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Join IRA Newsletter</Title>
      <Description>
        Stay connected to know when new arrivals and fresh deals come
      </Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>Sign Up</Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
