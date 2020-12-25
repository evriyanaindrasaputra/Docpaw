import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaPaw, FaFileAlt, FaUserAlt } from "react-icons/fa";

const FooterWrapper = styled.div`
  height: 70px;
  width: 100%;
  padding: 5px;
  transform: translateY(29%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  /* border-top: 15px #efefef solid; */
`;
const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  text-align: center;
  align-items: center;
`;
const FooterLink = styled(Link)`
  text-decoration: none;
  color: #abadae;
`;
const FooterText = styled.p`
  font-size: 10px;
  font-weight: 300;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterDiv>
        <FooterLink to="/">
          <FaPaw style={{ fontSize: "20px" }} />
          <FooterText>Beranda</FooterText>
        </FooterLink>
      </FooterDiv>
      <FooterDiv>
        <FooterLink to="/riwayat">
          <FaFileAlt style={{ fontSize: "20px" }} />
          <FooterText>Riwayat</FooterText>
        </FooterLink>
      </FooterDiv>
      <FooterDiv>
        <FooterLink to="/akun">
          <FaUserAlt style={{ fontSize: "20px" }} />
          <FooterText>Saya</FooterText>
        </FooterLink>
      </FooterDiv>
    </FooterWrapper>
  );
};

export default Footer;
