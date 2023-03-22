import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Container = styled.div`
  /* height: 60px; */
  background-color: white;
  color: #0b0742;
`;

const Wrapper = styled.div`
  padding: 0px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.h3`
  flex: 1;
  font-size: 13px;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: #0b0742;
`;
const Dot = styled.span`
  color: rgb(13, 13, 61);
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Center = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  margin: 0 0 0 0;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  width: 100%;
  border-radius: 5px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
`;

const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

//What i did to resolve MUI issues
// npm install @emotion/react
// npm install @emotion/styled
// npm i @emotion/core

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>
            IRA <Dot>.</Dot>
          </Logo>
        </Left>
        <Center>
          <Language>EN</Language>
          <SearchContainer>
            <SearchIcon style={{ color: "gray", fontSize: "20px" }} />
            <Input placeholder="Search IRA"></Input>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>Account</MenuItem>
          <MenuItem>Help</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="success"></Badge>
            <ShoppingCartOutlinedIcon />
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
