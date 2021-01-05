import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import { HeadersRoute, Divider } from "../../components";
import { LayoutPageWrapper } from "../../globalStyles";
import "./ChooseDay.css";

const ButtonWrapper = styled.div`
  margin: 10px auto;
  width: 100%;
`;
const WrapperQueue = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  @media screen and (max-width: 360px) {
    margin: 20px auto;
  }
`;
const WrapperHour = styled.div`
  margin: 10px 0;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 360px) {
    margin: 20px 0;
  }
`;
const Button = styled.button`
  /* width: 60px; */
  width: ${({ Big }) => (Big ? "60px" : "40px")};
  height: ${({ Big }) => (Big ? "60px" : "20px")};
  /* height: 60px; */
  padding: ${({ Big }) => (Big ? "2px" : "1px")};
  background: white;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.25);
  font-size: ${({ Big }) => (Big ? "18px" : "12px")};
  /* font-size: 18px; */
  font-weight: ${({ Big }) => (Big ? "600" : "500")};
  /* font-weight: 600; */
  line-height: ${({ Big }) => (Big ? "27px" : "18px")};
  /* line-height: 27px; */
  border-radius: 5px;
  margin: ${({ Big }) => (Big ? "0px" : "5px 5px")};
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    color: white;
    background: #6bcfff;
  }
  &:focus {
    outline: none;
    color: white;
    background: #6bcfff;
  }
`;

const ChooseDay = () => {
  const [value, setValue] = useState(new Date());
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isQueue, setIsQueue] = useState(false);
  const dumyAntrian = [
    { id: 1, antrian: 2 },
    { id: 2, antrian: 5 },
    { id: 3, antrian: 3 },
  ];
  const dumyHour = [
    { id: 1, hour: "08.00" },
    { id: 2, hour: "09.00" },
    { id: 3, hour: "10.00" },
    { id: 4, hour: "11.00" },
    { id: 5, hour: "13.00" },
    { id: 6, hour: "14.00" },
    { id: 7, hour: "15.00" },
    { id: 8, hour: "16.00" },
    { id: 19, hour: "17.00" },
    { id: 10, hour: "19.00" },
  ];

  // let [month, date, year] = value.toLocaleDateString("en-US").split("/");

  return (
    <>
      <HeadersRoute title="Pilih Hari" />
      <LayoutPageWrapper>
        <Calendar
          onChange={() => {
            setValue();
            setIsDateSelected(true);
          }}
          value={value}
        />
        <Divider />
        {isDateSelected && (
          <ButtonWrapper>
            <WrapperQueue>
              {dumyAntrian.map((antri) => (
                <Button Big onClick={() => setIsQueue(true)} key={antri.id}>
                  {antri.antrian}
                </Button>
              ))}
            </WrapperQueue>
            <WrapperHour>
              {isQueue &&
                dumyHour.map((hour) => (
                  <Button key={hour.id}>{hour.hour}</Button>
                ))}
            </WrapperHour>
          </ButtonWrapper>
        )}
      </LayoutPageWrapper>
    </>
  );
};

export default ChooseDay;
