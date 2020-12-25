import styled from "styled-components";
import {
  CardLiveBooking,
  HeadersRoute,
  SearchLiveBooking,
} from "../../components";
import { Cards } from "./LiveBookingData";

const LayouWrapper = styled.div`
  width: 100%;
  padding: 10px;
`;

const LiveBooking = () => {
  return (
    <>
      <HeadersRoute title="Live Booking Online" />
      <LayouWrapper>
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
      </LayouWrapper>
    </>
  );
};

export default LiveBooking;
