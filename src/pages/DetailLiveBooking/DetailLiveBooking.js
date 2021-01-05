import { useParams } from "react-router-dom";
import { CardDropdown, CardPhone, HeadersRoute } from "../../components";
import { Link } from "react-router-dom";
import { Image } from "../../components";
import styled from "styled-components";
import { Cards } from "../LiveBooking/LiveBookingData";

const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: #fff;
`;
const Desc = styled.div`
  padding: 10px;
  h3 {
    font-size: 14px;
    font-weight: 400;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    color: #999;
  }
`;
const CardWrapper = styled.div`
  display: block;
  height: 250px;
`;
const Button = styled(Link)`
  text-align: center;
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  background: #4fc1f7;
  box-shadow: 0 0.5px 2px rgba(0, 0, 0, 0.25);
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-transform: uppercase;
  border: none;
  outline: none;
  text-decoration: none;
  cursor: pointer;
`;

const DetailLiveBooking = () => {
  const { id } = useParams();
  // const selected = Cards[Number(id) - 1];
  const selected = Cards.filter((card) => card.id === Number(id));
  return (
    <>
      <HeadersRoute title={selected[0].title} />
      <LayoutWrapper>
        <Image src={selected[0].title} title={selected[0].title} />
        <Desc>
          <h3>{selected[0].title}</h3>
          <p>{selected[0].subtitle}</p>
        </Desc>
        <CardWrapper>
          <CardPhone />
          <CardDropdown />
        </CardWrapper>
        <Button to="/pilihhari">Booking Antrian</Button>
      </LayoutWrapper>
    </>
  );
};

export default DetailLiveBooking;
