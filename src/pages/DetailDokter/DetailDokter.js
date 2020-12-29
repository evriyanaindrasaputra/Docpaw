import React from "react";
import { useParams } from "react-router-dom";
import { CardDetailDokter } from "../../components";
import styled from "styled-components";
import { DataDokter } from "../ChatDokter/Data";
import { HeadersRoute } from "../../components";

const LayoutWrapper = styled.div`
  margin: 10px auto;
  width: 95%;
  padding: 10px;
  background: #fff;
  height: 80vh;
  max-height: 100%;
  overflow-y: auto;
  box-shadow: 0 1px 1px 2px rgba(0, 0, 0, 0.25);
  flex-wrap: wrap;
  border-radius: 10px;
`;

const DetailDokter = () => {
  const { id } = useParams();
  const selected = DataDokter.filter((data) => data.id === Number(id));
  return (
    <>
      <HeadersRoute title="Chat Dokter" />
      <LayoutWrapper>
        <CardDetailDokter {...selected[0]} />
      </LayoutWrapper>
    </>
  );
};

export default DetailDokter;
