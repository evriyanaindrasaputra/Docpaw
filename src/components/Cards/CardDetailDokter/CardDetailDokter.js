import React from "react";
import styled from "styled-components";
import { Avatar } from "../../../components";
import { FaStar, FaBriefcase } from "react-icons/fa";

const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const HeroDesc = styled.div`
  width: 100%;
  text-align: center;
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

const HeroRating = styled.div`
  margin: 5px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  font-size: 12px;
  font-weight: 400;
  color: #999;
`;
const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #e0e0e0;
  margin: 5px 0;
`;
const HeroInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: #53565a;
  text-align: center;
`;
const HeroInfoContent = styled.div`
  width: 33.33%;
  h3 {
    font-size: 10px;
    font-weight: 500;
    line-height: 15px;
  }
  p {
    font-size: 8px;
  }
`;
const HeroBuy = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #53565a;
  font-size: 10px;
  flex-wrap: wrap;
`;

const CardDetailDokter = ({
  image,
  isOnline,
  name,
  voucher,
  price,
  rating,
  description,
}) => {
  return (
    <HeroWrapper>
      <Avatar Big image={image} isOnline={isOnline} />
      <HeroDesc>
        <h3>{name}</h3>
        {!voucher ? (
          <p>RP.{price}</p>
        ) : (
          <>
            <s>Rp.{price}</s> <span>free</span>
          </>
        )}
      </HeroDesc>
      <HeroRating>
        <p>
          <FaStar style={{ color: "#FFC107", marginRight: "3px" }} />
          {rating}
        </p>
        <p>
          <FaBriefcase style={{ marginRight: "3px" }} />
          {description}
        </p>
      </HeroRating>
      <Divider />
      <HeroInfo>
        <HeroInfoContent>
          <h3>Alumni</h3>
          <p>Universitas Gadjah Mada 2016</p>
        </HeroInfoContent>
        <HeroInfoContent>
          <h3>Tempat Praktik</h3>
          <p>Klinik Hewan Jogja</p>
        </HeroInfoContent>
        <HeroInfoContent>
          <h3>Nomor Ijazah</h3>
          <p>4740/8653/KH</p>
        </HeroInfoContent>
      </HeroInfo>
      <Divider />
      <h3
        style={{
          width: "100%",
          color: "#53565A",
          fontSize: "12px",
          fontWeight: "600",
          margin: "5px 0",
          textAlign: "left",
        }}
      >
        Ringkasan Pembayaran
      </h3>
      <HeroBuy>
        <div style={{ width: "75%" }}>biaya sesi konsultasi 30 menit</div>
        <div style={{ width: "25%", textAlign: "right" }}>{price}</div>
        <div style={{ width: "75%" }}>biaya sesi konsultasi 30 menit</div>
        <div style={{ width: "25%", textAlign: "right" }}>{price}</div>
      </HeroBuy>
    </HeroWrapper>
  );
};

export default CardDetailDokter;
