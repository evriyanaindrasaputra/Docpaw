import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
`;

export const LayoutWrapper = styled.div`
  display: flex;
  background: #efefef;
  justify-content: center;
  height: 100%;
`;
export const Layout = styled.div`
  width: 360px;
  min-height: 100vh;
  height: 100%;
  background: #fff;
  overflow-y: hidden;
`;
export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: #e0e0e0;
  margin: 5px 0;
`;
export const LayoutPageWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background: #fff;
  height: 100%;
  overflow-y: auto;
`;
export default GlobalStyle;
