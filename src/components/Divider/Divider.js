import React from "react";
import styled from "styled-components";

const DividerWrapper = styled.div`
  width: 100%;
  height: 2px;
  background: #e0e0e0;
  margin: 5px 0;
`;

const Divider = () => {
  return (
    <>
      <DividerWrapper />
    </>
  );
};

export default Divider;
