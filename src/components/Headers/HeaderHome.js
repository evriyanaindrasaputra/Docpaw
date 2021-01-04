import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaRegBell, FaMapMarkerAlt } from "react-icons/fa";

const Headewrap = styled.div`
  width: 100%;
  background: #6bcfff;
  height: 182px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding: 15px;
  position: relative;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const HeadingH1 = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
  text-decoration: none;
  color: #fff;
`;

const HeadingIcon = styled(FaRegBell)`
  width: 24px;
  height: 24px;
  color: #fff;
  cursor: pointer;
`;

const InputWapper = styled.div`
  width: 251px;
  height: 32px;
  display: flex;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.2);
  padding: 5px;
  align-items: center;
`;

const InputIcon = styled(FaMapMarkerAlt)`
  color: #6bcfff;
`;
const Input = styled.input.attrs({
  type: "text",
})`
  margin-left: 5px;
  font-size: 12px;
  border: none;
  font-weight: 300;
  line-height: 18px;
  color: #58555d;
  width: 100%;
  outline: none;
`;

const UserInfoWrapper = styled.div`
  width: 321px;
  height: 100px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 148px;
  padding: 10px 5px 10px 23px;
`;

const UserInfoHeading = styled.p`
  margin-top: 5px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const UserSaldoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
`;

const UserSaldoInfo = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
`;
const UserSaldo = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
`;
const TopUpBtn = styled(Link)`
  background: #6bcfff;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  padding: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-transform: uppercase;
  border: none;
  border: 7px;
  cursor: pointer;
`;

const HeaderHome = () => {
  return (
    <Headewrap>
      <Heading>
        <HeadingH1 to="/">Docpaws</HeadingH1>
        <HeadingIcon />
      </Heading>
      <InputWapper>
        <InputIcon />
        <Input placeholder="Klaten, Jawa Tengah" />
      </InputWapper>
      <UserInfoWrapper>
        <UserInfoHeading>Halo, Jane Doe</UserInfoHeading>
        <UserSaldoWrapper>
          <div>
            <UserSaldoInfo>Saldo</UserSaldoInfo>
            <UserSaldo>RP 100.000</UserSaldo>
          </div>
          <TopUpBtn to="/pembayaran">Top Up</TopUpBtn>
        </UserSaldoWrapper>
      </UserInfoWrapper>
    </Headewrap>
  );
};
export default HeaderHome;
