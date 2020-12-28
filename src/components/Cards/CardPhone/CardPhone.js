import styled from "styled-components";
import { FaMobileAlt } from "react-icons/fa";

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px;
`;
const CardDesc = styled.div`
  display: block;
  margin-left: 5px;

  h3 {
    font-size: 10px;
    font-weight: 500;
    line-height: 15px;
    color: #53565a;
  }
  p {
    font-size: 8px;
    color: #999;
  }
`;

const CardPhone = () => {
  return (
    <CardWrapper>
      <FaMobileAlt />
      <CardDesc>
        <h3>Telepon</h3>
        <p>(0274) 564707</p>
      </CardDesc>
    </CardWrapper>
  );
};

export default CardPhone;
