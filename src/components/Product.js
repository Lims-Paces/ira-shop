import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 0%;
`;

const Anchor = styled.a`
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 30px;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Anchor>
        <Image src={item.img} />
      </Anchor>
    </Container>
  );
};

export default Product;
