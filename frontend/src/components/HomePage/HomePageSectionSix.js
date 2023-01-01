import React from "react";
import styled from "styled-components";
import Hpic from "../../images/HomePageS6.png";
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import PenImg from "../../images/pen.png";
import CalendarImg from "../../images/Calendar.png";
const Container = styled.div`
  height: 1000px;
`;
const ImgContainer = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
  margin-top: 100px;
`;
const Img = styled.img`
  height: 100px;
  width: 900px;
`;
const Header = styled.div`
  text-align: center;
  margin: 100px;
  font-family: "Josefin Sans";
  font-size: 42px;
  line-height: 49px;

  color: #151875;
`;
const ItemContainer = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  justify-content: space-around;
`;
const Item = styled.div`
  height: 500px;
  width: 380px;
  background: #ffffff;

  box-shadow: 0px 8px 40px rgba(49, 32, 138, 0.05);
  border-radius: 5px;
`;
const ItemImgContainer = styled.div`
  height: 260px;
  width: 380px;
`;
const ItemImg = styled.img`
  width: 380px;
`;
const ItemNameAndDate = styled.div`
  display: flex;
  margin: 20px;
`;
const ItemName = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  font-family: "Josefin Sans";
  font-size: 14px;
  line-height: 16px;

  color: #151875;
`;
const Pen = styled.img`
  margin-right: 5px;
  height: 11px;
  width: 11px;
`;
const ItemDate = styled.div`
  display: flex;
  align-items: center;
  font-family: "Josefin Sans";
  font-size: 14px;
  line-height: 16px;

  /* Text */

  color: #151875;
`;
const Calendar = styled.img`
  margin-right: 5px;
  height: 11px;
  width: 11px;
`;
const ItemHeader = styled.div`
  margin: 20px;
  font-family: "Josefin Sans";
  font-size: 18px;
  line-height: 21px;
  cursor: pointer;
  color: #151875;
  ${Item}:hover & {
    color: #fb2e86;
  }
`;
const ItemText = styled.div`
  margin: 20px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;

  color: #72718f;
`;
const ItemBtn = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  /* identical to box height, or 188% */

  text-decoration-line: underline;

  /* Text */

  color: #151875;
  cursor: pointer;
  margin: 20px;
  ${Item}:hover & {
    color: #fb2e86;
  }
`;
function HomePageSectionSix() {
  const Items = (props) => {
    return (
      <Item>
        <ItemImgContainer>
          <ItemImg src={props.img} />
        </ItemImgContainer>
        <ItemNameAndDate>
          <ItemName>
            <Pen src={PenImg} /> {props.name}
          </ItemName>
          <ItemDate>
            <Calendar src={CalendarImg} />
            {props.date}
          </ItemDate>
        </ItemNameAndDate>
        <ItemHeader>{props.Header}</ItemHeader>
        <ItemText>{props.text}</ItemText>
        <ItemBtn>Read More</ItemBtn>
      </Item>
    );
  };
  return (
    <Container>
      <ImgContainer>
        <Img src={Hpic} />
      </ImgContainer>
      <Header>Leatest Blog</Header>
      <ItemContainer>
        <Items
          img={blog1}
          name={"SaberAli"}
          date={"21 August,2020"}
          Header={"Top esssential Trends in 2021"}
          text={
            " More off this less hello samlande lied much over tightly circa horse taped mightly"
          }
        />
        <Items
          img={blog2}
          name={"SaberAli"}
          date={"21 August,2020"}
          Header={"Top esssential Trends in 2021"}
          text={
            " More off this less hello samlande lied much over tightly circa horse taped mightly"
          }
        />
        <Items
          img={blog3}
          name={"SaberAli"}
          date={"21 August,2020"}
          Header={"Top esssential Trends in 2021"}
          text={
            " More off this less hello samlande lied much over tightly circa horse taped mightly"
          }
        />
      </ItemContainer>
    </Container>
  );
}

export default HomePageSectionSix;
