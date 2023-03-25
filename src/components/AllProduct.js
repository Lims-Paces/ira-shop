import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Icon = styled.div`
  opacity: 0;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;

  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover ${Icon} {
    opacity: 1;
  }
`;

const Image = styled.img`
  height: 75%;
`;

const Info = styled.div``;

const AllProduct = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>

        <Icon>
          <SearchOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default AllProduct;
