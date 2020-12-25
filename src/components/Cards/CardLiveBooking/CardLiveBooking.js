import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const CardWrapper = styled(Link)`
  width: 100%;
  height: 93px;
  padding: 5px;
  display: flex;
  text-decoration: none;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
  margin-bottom: 20px;
  color: #000;
  cursor: pointer;
`;
const CardImgWrapper = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 25%;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;
const CardTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;
const CardSubTitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #999;
`;
const CardLiveBooking = ({ id, title, subtitle, rating, address }) => {
  return (
    <CardWrapper to={`/livebooking/${id}`}>
      <CardImgWrapper>
        <img src="" alt="" />
      </CardImgWrapper>
      <div style={{ width: "65%" }}>
        <CardTitle>{title}</CardTitle>
        <CardSubTitle>{subtitle}</CardSubTitle>
        <IconWrapper>
          <div style={{ display: "flex" }}>
            <FaStar style={{ color: "yellow" }} />
            <CardSubTitle>{rating}</CardSubTitle>
          </div>
          <div style={{ display: "flex" }}>
            <FaMapMarkerAlt />
            <CardSubTitle>{address}</CardSubTitle>
          </div>
        </IconWrapper>
      </div>
    </CardWrapper>
  );
};

export default CardLiveBooking;
