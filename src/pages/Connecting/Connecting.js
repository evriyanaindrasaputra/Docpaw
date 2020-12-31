import React from "react";
import { CardConnecting, HeadersRoute } from "../../components";
import { useParams } from "react-router-dom";
import { DataDokter } from "../ChatDokter/Data";
import styled from "styled-components";

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

const Connecting = () => {
  const { id } = useParams();
  const selected = DataDokter.filter((data) => data.id === Number(id));
  return (
    <>
      <HeadersRoute title="Sedang Menghubungkan" />
      <LayoutWrapper>
        <CardConnecting {...selected[0]} />
      </LayoutWrapper>
    </>
  );
};

export default Connecting;
