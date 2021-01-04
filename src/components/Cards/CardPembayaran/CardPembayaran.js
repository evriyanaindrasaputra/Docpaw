import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  p {
    width: 70%;
    margin-left: 5px;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
  }
`;
const ImageWrapper = styled.div`
  width: 30%;
`;

const CardPembayaran = ({ title }) => {
  return (
    <>
      <CardWrapper>
        <ImageWrapper>
          <img src="#" alt="Card" />
        </ImageWrapper>
        <p>{title}</p>
      </CardWrapper>
    </>
  );
};

export default CardPembayaran;
