import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  background-color: white;
  height: 45vh;
  padding: 5px 20px;
  margin: 0 30px 50px 30px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.h4`
  font-size: 25px;
  margin-bottom: 20px;
`;

const Products = (props) => {
  return (
    <Container>
      <Title>Popular products in underwears</Title>
      <Wrapper>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
