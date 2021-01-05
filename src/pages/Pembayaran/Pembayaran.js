import React from "react";
import { HeadersRoute, CardPembayaran } from "../../components";
import { LayoutPageWrapper } from "../../globalStyles";
import styled from "styled-components";

const SectionSaldo = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  line-height: 18px;
  padding: 5px 10px;
`;
const Heading = styled.h2`
  margin: 10px 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  padding: 5px;
`;
const SubHeading = styled.h3`
  margin: 15px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  padding: 5px;
`;
const Button = styled.button`
  display: block;
  margin: 50px auto 0 auto;
  text-align: center;
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 5px;
  background: #4fc1f7;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
`;
const Pembayaran = () => {
  return (
    <>
      <HeadersRoute title="Pembayaran" />
      <LayoutPageWrapper>
        <Heading>Metode Pembayaran</Heading>
        <SectionSaldo>
          <p>Saldo Docpaws</p>
          <p>RP 100.000</p>
        </SectionSaldo>
        <SubHeading>Pilihan Lainnya</SubHeading>
        <CardPembayaran title="Kartu Debit" />
        <CardPembayaran title="ATM" />
        <CardPembayaran title="Internet / Mobile Banking" />
        <Button>Bayar Sekarang</Button>
      </LayoutPageWrapper>
    </>
  );
};

export default Pembayaran;
