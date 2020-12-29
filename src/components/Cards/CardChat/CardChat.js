import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Avatar } from "../../../components";
import { FaCalendar, FaStar, FaBriefcase } from "react-icons/fa";

const CardWrapper = styled.div`
  margin: 10px auto;
  width: 95%;
  padding: 10px;
  background: #fff;
  box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.25);
`;
const CardContent = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const CardDesc = styled.div`
  h3 {
    font-size: 12px;
    font-weight: 400;
    color: #000;
  }
  s,
  p {
    font-size: 12px;
    font-weight: 400;
    color: #999;
    margin-right: 5px;
  }
  span {
    font-weight: bold;
    text-transform: uppercase;
  }
`;
const CardDividerOnline = styled.div`
  width: 100%;
  height: 2px;
  background: #e0e0e0;
  margin: 5px 0;
`;
const CardDividerOffline = styled.div`
  width: 100%;
  background: #4fc1f7;
  color: #000;
  text-align: center;
  border-radius: 5px;
  padding: 2px;
  margin: 5px 0;
  p {
    font-size: 10px;
  }
`;
const CardActions = styled.div`
  margin-top: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  color: #999;
`;

const Button = styled(Link)`
  border-radius: 5px;
  /* border: none; */
  outline: none;
  padding: 5px 5px;
  /* background: #4fc1f7; */
  background: ${({ isOnline }) => (isOnline ? "#4fc1f7" : "white")};
  color: ${({ isOnline }) => (isOnline ? "white" : "red")};
  border: ${({ isOnline }) => (isOnline ? "none" : "1px solid red")};
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
`;

const CardChat = ({
  id,
  isOnline,
  image,
  name,
  price,
  voucher,
  rating,
  description,
}) => {
  return (
    <CardWrapper>
      <CardContent>
        <Avatar image={image} isOnline={isOnline} />
        <CardDesc>
          <h3>{name}</h3>
          {!voucher ? (
            <p>{price}</p>
          ) : (
            <>
              <s>{price}</s> <span>free</span>
            </>
          )}
        </CardDesc>
      </CardContent>
      {isOnline ? (
        <CardDividerOnline />
      ) : (
        <CardDividerOffline>
          <p>
            <FaCalendar style={{ marginRight: "3px" }} />
            Akan tersedia pada : Kamis, 09.00 - 11.00
          </p>
        </CardDividerOffline>
      )}
      <CardActions>
        <div>
          <p>
            <FaStar style={{ color: "#FFC107", marginRight: "3px" }} /> {rating}
          </p>
        </div>
        <div>
          <p>
            <FaBriefcase style={{ marginRight: "3px" }} />
            {description}
          </p>
        </div>
        <Button isOnline={isOnline} to={`/detaildokter/${id}`}>
          {isOnline ? "Chat" : "Ingatkan Saya"}
        </Button>
      </CardActions>
    </CardWrapper>
  );
};

export default CardChat;
