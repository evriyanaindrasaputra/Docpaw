import React from "react";
import styled from "styled-components";

const AvatarWrapper = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  /* padding: 1px; */
  overflow: hidden;
  /* border: 1px solid red; */
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Status = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: ${({ isOnline }) => (isOnline ? "#00E092" : "#FD0000")};
  border-radius: 50%;
  bottom: 5%;
  right: 25%;
`;

const Avatar = ({ image, isOnline }) => {
  return (
    <AvatarWrapper>
      <Image src={image} alt={image} />
      <Status isOnline={isOnline} />
    </AvatarWrapper>
  );
};

export default Avatar;
