import React from "react";
import { CardChat, HeadersRoute } from "../../components";
import { DataDokter } from "./Data";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background: #fff;
  height: 100%;
  overflow-y: auto;
`;

const ChatDokter = () => {
  return (
    <>
      <HeadersRoute title="Chat Dokter" />
      <LayoutWrapper>
        {DataDokter.map((data, index) => (
          <CardChat key={index} {...data} />
        ))}
      </LayoutWrapper>
    </>
  );
};

export default ChatDokter;
