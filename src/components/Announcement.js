import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #0b0742;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <div>
      <Container>Wholesale deals! We cater for your deliveries!</Container>
    </div>
  );
};

export default Announcement;
