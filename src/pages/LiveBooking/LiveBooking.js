import { useState } from "react";
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
  const [hospitals, setHospitals] = useState(Cards);
  const filterHospitals = (e) => {
    if (e.target.value === "") {
      setHospitals(Cards);
    } else {
      setHospitals(
        Cards.filter((card) =>
          card.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <>
      <HeadersRoute title="Live Booking Online" />
      <LayoutWrapper>
        <SearchLiveBooking filterHospitals={filterHospitals} />
        {hospitals.map((card) => (
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
