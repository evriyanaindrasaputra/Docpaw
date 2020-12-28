import styled from "styled-components";

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 128px;
  height: 153px;
`;

const Image = ({ image, title }) => {
  return (
    <ImgWrapper>
      <Img src={image} alt={title} />
    </ImgWrapper>
  );
};

export default Image;
