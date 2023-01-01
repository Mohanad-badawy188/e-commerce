import React from "react";
import styled from "styled-components";
import FreeDelivery from "../../../images/freeDelivery.png";
import cashbacck from "../../../images/cashback.png";
import premiumquality from "../../../images/premium-quality.png";
import support from "../../../images/24-hours-support.png";
import PropTypes from "prop-types";

const Container = styled.div`
  margin-top: 100px;
  height: 600px;
`;
const Header = styled.div`
  text-align: center;
  font-family: "Josefin Sans";
  font-size: 42px;
  line-height: 49px;

  color: #151875;
`;
const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 60px 170px;
`;
const Item = styled.div`
  background: #ffffff;
  width: 270px;
  height: 270px;
  box-shadow: 0px 8px 40px rgba(49, 32, 138, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;
const ItemHeader = styled.div`
  font-family: "Josefin Sans";
  font-size: 22px;
  line-height: 26px;
  text-align: center;

  color: #151875;
`;
const ItemText = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;

  text-align: center;

  color: rgba(26, 11, 91, 0.3);
`;
const ItemImgContainer = styled.div`
  display: flex;
`;
const ItemImg = styled.img`
  margin: auto;
`;

function PartThree() {
  function Items(props) {
    return (
      <Item>
        <ItemImgContainer>
          <ItemImg src={props.Img} />
        </ItemImgContainer>
        <ItemHeader>{props.Header}</ItemHeader>
        <ItemText>{props.Text}</ItemText>
      </Item>
    );
  }
  Items.propTypes = {
    Img: PropTypes.string,
    Header: PropTypes.string,
    Text: PropTypes.string,
  };
  return (
    <Container>
      <Header>What Shopex Offer!</Header>
      <ItemsContainer>
        <Items
          Img={FreeDelivery}
          Header="24/7 Support"
          Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
        />
        <Items
          Img={cashbacck}
          Header="24/7 Support"
          Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
        />
        <Items
          Img={premiumquality}
          Header="24/7 Support"
          Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
        />
        <Items
          Img={support}
          Header="24/7 Support"
          Text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
        />
      </ItemsContainer>
    </Container>
  );
}

export default PartThree;
