import { useParams } from "react-router-dom";
import { HeadersRoute } from "../../components";
import { Cards } from "../LiveBooking/LiveBookingData";

const DetailLiveBooking = () => {
  const { id } = useParams();

  return (
    <>
      <HeadersRoute title={Cards[Number(id) - 1].title} />
    </>
  );
};

export default DetailLiveBooking;
