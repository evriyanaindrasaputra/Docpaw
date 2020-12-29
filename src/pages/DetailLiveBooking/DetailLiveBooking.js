import { useParams } from "react-router-dom";
import { CardDropdown, CardPhone, HeadersRoute } from "../../components";
import { Image } from "../../components";
import styled from "styled-components";
import { Cards } from "../LiveBooking/LiveBookingData";

const LayoutWrapper = styled.div`
  width: 100%;
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
const Button = styled.button`
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
  cursor: pointer;
  /* transform: translateY(200%); */
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
        <CardPhone />
        <CardDropdown />
        <Button>Booking Antrian</Button>
      </LayoutWrapper>
    </>
  );
};

export default DetailLiveBooking;
