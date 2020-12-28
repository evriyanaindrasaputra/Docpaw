import { useState } from "react";
import styled from "styled-components";
import { FaAngleDown, FaAngleUp, FaRegClock } from "react-icons/fa";

const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  flex-wrap: wrap;
`;
const CardDesc = styled.div`
  display: block;
  margin-left: 5px;
  margin-right: 5px;

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
const DropdownWrapper = styled.div`
  margin: 8px 0 8px 21px;
  width: 100%;
  font-size: 8px;
  color: #999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const dataDumy = [
  { day: "senin", time: "08.00 - 20.00" },
  { day: "selasa", time: "08.00 - 20.00" },
  { day: "rabu", time: "08.00 - 20.00" },
  { day: "kamis", time: "08.00 - 20.00" },
  { day: "jumat", time: "08.00 - 20.00" },
  { day: "sabtu", time: "08.00 - 12.00" },
  { day: "minggu", time: "tutup" },
];

const CardDropdown = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <CardWrapper onClick={() => setClicked(!clicked)}>
      <FaRegClock />
      <CardDesc>
        <h3>Jam Buka</h3>
        <p>Buka Sekarang : 08:00 - 20.00</p>
      </CardDesc>
      {clicked ? <FaAngleUp /> : <FaAngleDown />}
      <DropdownWrapper>
        {clicked &&
          dataDumy.map((data, index) => (
            <div key={index}> {`${data.day} :${data.time}`} </div>
          ))}
      </DropdownWrapper>
    </CardWrapper>
  );
};

export default CardDropdown;
