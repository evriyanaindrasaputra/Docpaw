import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  margin: 15px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
  text-align: center;
`;
const CardLeft = styled.div`
  flex: 1;
  width: 50%;
  font-size: 48px;
  line-height: 72px;
  font-weight: 500;
  border-right: 1px solid #e6e6e6;
`;
const CardRight = styled.div`
  flex: 1;
  width: 50%;
  font-size: 36px;
  line-height: 54px;
  font-weight: 500;
`;

const Antrian = styled.p`
  font-size: 12px;
  line-height: 18px;
  text-align: center;
`;

const CardAntrian = ({ leftContent, rightContent }) => {
  return (
    <>
      <CardWrapper>
        <CardLeft> {leftContent}</CardLeft>
        <CardRight>
          {rightContent && (
            <span>
              {" "}
              {rightContent} <Antrian> Antrian tersisa</Antrian>{" "}
            </span>
          )}
        </CardRight>
      </CardWrapper>
    </>
  );
};

export default CardAntrian;
