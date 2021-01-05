import React from "react";
import { Avatar, HeadersRoute } from "../../components";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { DataDokter } from "../ChatDokter/Data";
import { FaStar } from "react-icons/fa";
const LayoutWrapper = styled.div`
  margin: 10px auto;
  width: 95%;
  padding: 10px;
  background: #fff;
  height: 80vh;
  max-height: 100%;
  overflow-y: auto;
  box-shadow: 0 1px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
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
const SectionRating = styled.section`
  color: #000;
  background: #fff;
  text-align: center;
  width: 90%;
  margin: 20px auto 0 auto;
  h2 {
    font-size: 14px;
    line-height: 21px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
  }
`;
const RatingIcon = styled(FaStar)`
  color: #ffc107;
  margin: 0 5px;
  font-size: 20px;
  margin: 25px 5px;
`;
const Button = styled.button`
  display: block;
  margin: 40px auto 0 auto;
  text-align: center;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px;
  background: #4fc1f7;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  width: 115px;
`;

const Rating = () => {
  const { id } = useParams();
  const selected = DataDokter.filter((data) => data.id === Number(id));
  return (
    <>
      <HeadersRoute title="Beri Rating" />
      <LayoutWrapper>
        <HeroWrapper>
          <Avatar
            Big
            image={selected[0].image}
            isOnline={selected[0].isOnline}
          />
          <HeroDesc>
            <h3>{selected[0].name}</h3>
            {!selected[0].voucher ? (
              <p>RP.{selected[0].price}</p>
            ) : (
              <>
                <s>Rp.{selected[0].price}</s> <span>free</span>
              </>
            )}
          </HeroDesc>
        </HeroWrapper>
        <SectionRating>
          <h2>Bagaiamana Konsultasimu</h2>
          <p>
            Bantu kami untuk meningkatkan layanan konsultasi agar lebih baik
            lagi dengan menilai konsultasi ini.
          </p>
          {[0, 1, 2, 3, 4].map((index) => (
            <RatingIcon key={index} />
          ))}
        </SectionRating>
        <Button>Beri Rating</Button>
      </LayoutWrapper>
    </>
  );
};

export default Rating;
