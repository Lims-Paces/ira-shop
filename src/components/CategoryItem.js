import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  /* flex: 1; */
  margin: 10px;
  padding: 20px;
  height: 60vh;
  width: 30%;
`;

const Image = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  margin-bottom: 30px;
`;

const Title = styled.h3`
  font-size: 25px;
  margin-bottom: 20px;
`;
const Anchor = styled.a`
  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Title>{item.title}</Title>
      <Image src={item.img} />
      <Anchor>Shop now</Anchor>
    </Container>
  );
};

export default CategoryItem;
