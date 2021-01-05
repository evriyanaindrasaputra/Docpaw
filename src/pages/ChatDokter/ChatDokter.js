import React from "react";
import { CardChat, HeadersRoute } from "../../components";
import { DataDokter } from "./Data";
import { LayoutPageWrapper } from "../../globalStyles";

const ChatDokter = () => {
  return (
    <>
      <HeadersRoute title="Chat Dokter" />
      <LayoutPageWrapper>
        {DataDokter.map((data, index) => (
          <CardChat key={index} {...data} />
        ))}
      </LayoutPageWrapper>
    </>
  );
};

export default ChatDokter;
