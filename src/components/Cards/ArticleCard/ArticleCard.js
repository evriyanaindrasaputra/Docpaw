import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";

const Card = styled(Link)`
  text-decoration: none;
  width: 150px;
  height: 154px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0, 0.5px, 2px rgba(0, 0, 0, 0.25);
`;

const CardImg = styled.img`
  width: 150px;
  height: 91px;
`;

const CardTitle = styled.p`
  font-weight: 400;
  font-size: 10px;
`;
const CardDate = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

const ArticleCard = ({ date, time, title }) => {
  return (
    <Card to="/">
      <CardImg />
      <div style={{ padding: "10px" }}>
        <CardTitle>{title}</CardTitle>
        <CardDate>
          <FaRegClock />
          <p style={{ fontSize: "9px", fontWeight: "300", marginLeft: "5px" }}>
            {date}, {time}
          </p>
        </CardDate>
      </div>
    </Card>
  );
};

export default ArticleCard;
