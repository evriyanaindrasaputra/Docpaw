import { useParams } from "react-router-dom";
import { CardDropdown, CardPhone, HeadersRoute } from "../../components";
import { Image } from "../../components";
import styled from "styled-components";
import { Cards } from "../LiveBooking/LiveBookingData";

const LayoutWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background: #fff;
  height: 83.8vh;
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
`;

const DetailLiveBooking = () => {
  const { id } = useParams();
  const selected = Cards[Number(id) - 1];
  return (
    <>
      <HeadersRoute title={selected.title} />
      <LayoutWrapper>
        <Image src={selected.title} title={selected.title} />
        <Desc>
          <h3>{selected.title}</h3>
          <p>{selected.subtitle}</p>
        </Desc>
        <CardPhone />
        <CardDropdown />
        <Button>Booking Antrian</Button>
      </LayoutWrapper>
    </>
  );
};

export default DetailLiveBooking;
