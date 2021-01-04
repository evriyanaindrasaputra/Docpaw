import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.2);
  padding: 5px;
  margin-top: 5px;
`;
const SearchBar = styled.input.attrs({
  type: "text",
})`
  width: 100%;
  font-size: 12px;
  font-weight: 300;
  outline: none;
  border: none;
  margin-left: 5px;
`;

const SearchLiveBooking = ({ filterHospitals }) => {
  return (
    <SearchWrapper>
      <FaSearch />
      <SearchBar
        placeholder="Cari Klinik Hewan di Sekitar Anda"
        onChange={(e) => filterHospitals(e)}
      />
    </SearchWrapper>
  );
};

export default SearchLiveBooking;
