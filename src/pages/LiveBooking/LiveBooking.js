import styled from "styled-components";
import {
  CardLiveBooking,
  HeadersRoute,
  SearchLiveBooking,
} from "../../components";
import { Cards } from "./LiveBookingData";

const LayoutWrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

const LiveBooking = () => {
  return (
    <>
      <HeadersRoute title="Live Booking Online" />
      <LayoutWrapper>
        <SearchLiveBooking />
        {Cards.map((card) => (
          <CardLiveBooking
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            rating={card.rating}
            address={card.address}
            id={card.id}
          />
        ))}
      </LayoutWrapper>
    </>
  );
};

export default LiveBooking;
