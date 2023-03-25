import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: white;
  padding-left: 40px;
  padding-right: 40px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  font-size: 13px;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: #0b0742;
  font-family: "Work Sans", sans-serif;
`;
const Dot = styled.div`
  margin-top: -30px;
  color: rgb(13, 13, 61);
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin: 0 0 20px 0;
`;

const ListItems = styled.div`
  display: flex;
  flex-direction: column;
`;
const UsefulLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const UsefulItem = styled.div`
  width: 50%;
  margin-bottom: 5px;
`;

const Anchor = styled.a`
  margin-bottom: 5px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          IRA
          <Dot>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                clip-rule="evenodd"
              />
            </svg>
          </Dot>
        </Logo>
      </Left>
      <Center>
        <Title>Make Money with Us</Title>
        <ListItems>
          <Anchor>Sell products on IRA</Anchor>
          <Anchor>Become an affiliate</Anchor>
          <Anchor>Advertise your products</Anchor>
          <Anchor>Become a logistics service partner</Anchor>
        </ListItems>
      </Center>
      <Right>
        <Title>Useful Links</Title>
        <UsefulLinks>
          <UsefulItem>
            <Anchor>Home</Anchor>
          </UsefulItem>
          <UsefulItem>
            <Anchor>Cart</Anchor>
          </UsefulItem>
          <UsefulItem>
            <Anchor>My account</Anchor>
          </UsefulItem>
          <UsefulItem>
            <Anchor>Male underwears</Anchor>
          </UsefulItem>
          <UsefulItem>
            <Anchor>Female Underwears</Anchor>
          </UsefulItem>
          <UsefulItem>
            <Anchor>Drifts</Anchor>
          </UsefulItem>
          <UsefulItem>
            <Anchor>Duvet</Anchor>
          </UsefulItem>
          <UsefulItem>
            <Anchor>Order tracking</Anchor>
          </UsefulItem>
          <UsefulItem>
            <Anchor>Wishlist</Anchor>
          </UsefulItem>
          <UsefulItem>
            <Anchor>Terms</Anchor>
          </UsefulItem>
        </UsefulLinks>
      </Right>
    </Container>
  );
};

export default Footer;
