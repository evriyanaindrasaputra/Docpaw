import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Avatar } from "../../../components";

const LayoutWrapper = styled.div`
  width: 100%;
  text-align: center;
  p {
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  h3 {
    font-size: 14px;
    line-height: 21px;
    font-weight: 700;
    margin: 10px 0;
  }
`;
const CountDown = styled.div`
  text-align: center;
  font-size: 48px;
  font-weight: 500;
`;

const CardConnecting = ({ image, isOnline, name }) => {
  const [counter, setCounter] = useState(30);
  const history = useHistory();
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  if (counter === 0) history.push("/antrian");
  return (
    <>
      <LayoutWrapper>
        <div
          style={{
            margin: "10px auto",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Avatar Big image={image} isOnline={isOnline} />
        </div>
        <p>Mohon tunggu sebentar, kami sedang menghubungkan anda dengan :</p>
        <h3>{name}</h3>
        <CountDown>{counter}</CountDown>
      </LayoutWrapper>
    </>
  );
};

export default CardConnecting;
