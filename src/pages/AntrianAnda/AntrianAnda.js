import React from "react";
import { CardAntrian, HeadersRoute, Divider } from "../../components";
import { LayoutPageWrapper } from "../../globalStyles";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Pembayaran = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #53565a;
  font-size: 10px;
  flex-wrap: wrap;
  margin: 10px 0 20px 0;
`;
const Button = styled(Link)`
  text-align: center;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px;
  background: #4fc1f7;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
  width: 120px;
`;

const AntrianAnda = () => {
  return (
    <>
      <HeadersRoute title="Antrian Anda" />
      <LayoutPageWrapper>
        Nomor Antrian Saat ini
        <CardAntrian leftContent="03" rightContent="4" />
        Nomor Antrian Anda
        <CardAntrian leftContent="07" />
        <Divider />
        Ringkasan Pembayaran
        <Pembayaran>
          <div style={{ width: "75%" }}>Servicee charge</div>
          <div style={{ width: "25%", textAlign: "right" }}>Rp 50.000</div>
          <div style={{ width: "75%" }}>Kupon diskon </div>
          <div style={{ width: "25%", textAlign: "right" }}>-Rp 50.000</div>
          <div style={{ width: "75%" }}>Total Pembayaran </div>
          <div style={{ width: "25%", textAlign: "right" }}>Rp 50.000</div>
        </Pembayaran>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button to="/">Konfirmasi</Button>
        </div>
      </LayoutPageWrapper>
    </>
  );
};

export default AntrianAnda;
