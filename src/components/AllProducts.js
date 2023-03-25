import React from "react";
import styled from "styled-components";
import { allProducts } from "../data";
import AllProduct from "./AllProduct";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: white;
  padding-top: 0;
  margin-top: 0;
`;

const Header = styled.h2`
  font-size: 25px;
  padding-top: 40px;
  padding-left: 50px;
  margin-bottom: 0;
`;

const Wrapper = styled.div`
  background-color: white;
`;

const AllProducts = () => {
  return (
    <Wrapper>
      <Header>New arrivals</Header>
      <Container>
        {allProducts.map((item) => (
          <AllProduct key={item.id} item={item} />
        ))}
      </Container>
    </Wrapper>
  );
};

export default AllProducts;
