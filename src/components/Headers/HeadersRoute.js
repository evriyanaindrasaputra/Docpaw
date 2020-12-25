import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { FaAngleLeft } from "react-icons/fa";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 106px;
  background: #6bcfff;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  color: white;
`;
const HeadingWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
`;
const Heading = styled.h1`
  width: 90%;
  font-size: 17px;
  font-weight: 400;
  line-height: 25px;
  text-align: center;
`;
const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
`;
const HeadersRoute = ({ title }) => {
  const history = useHistory();
  return (
    <HeaderWrapper>
      <HeadingWrapper>
        <Button onClick={() => history.goBack()}>
          <FaAngleLeft />
        </Button>
        <Heading>{title}</Heading>
      </HeadingWrapper>
    </HeaderWrapper>
  );
};

export default HeadersRoute;
