import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  text-decoration: none;
  width: 90px;
  height: 90px;
  border-radius: 5px;
  box-shadow: 0 0.5px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;
const CardImage = styled.img`
  width: 52px;
  height: 52px;
`;
const CardTitle = styled.p`
  font-size: 8px;
  font-weight: 300;
  line-height: 12px;
  text-align: center;
`;

const CardHome = ({ img, title, path }) => {
  return (
    <Card to={path}>
      <CardImage src={img} alt={title} />
      <CardTitle>{title}</CardTitle>
    </Card>
  );
};

export default CardHome;
