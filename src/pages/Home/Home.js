import { ArticleCard, CardHome, HeaderHome, Footer } from "../../components";
import { Datas, Articles } from "./HomeData";
import styled from "styled-components";
import { LayoutPageWrapper } from "../../globalStyles";
// import poto from "../../images/1.png";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <LayoutPageWrapper>
        <CardWrapper>
          {Datas.map((data, index) => (
            <CardHome
              key={index}
              img={data.img}
              title={data.title}
              path={data.path}
            />
          ))}
        </CardWrapper>
        <ArticleWrapper>
          <ArticleHeader>Article</ArticleHeader>
          {Articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              date={article.date}
              time={article.time}
            />
          ))}
        </ArticleWrapper>
        <Footer />
      </LayoutPageWrapper>
    </>
  );
};

const CardWrapper = styled.div`
  margin-top: 100px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 360px) {
    margin-top: 80px;
  }
`;
const ArticleWrapper = styled.div`
  flex-wrap: wrap;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;
const ArticleHeader = styled.p`
  margin-bottom: 10px;
  width: 100%;
  font-size: 14px;
  font-weight: 300;
`;

export default Home;
