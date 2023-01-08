import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomePageSectionOne from "./HomePageSectionOne";
import HomePageSectionThree from "./HomePageSectionThree";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import HomePageSectionFive from "./HomePageSectionFive";
const SliderPages = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
const Wrap = styled.div`
  height: 100%;
  display: flex;
  transition: all 2.5s ease;
  transform: translateX(${(props) => props.PageIndex * -100}vw);
`;
const Sections = styled.div`
  height: 100%;
  width: 100%;
`;

const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  ${(props) => props.direction} : 20px;
  color: #fb2e86;
  cursor: pointer;
`;
const DotContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  left: 45%;
  bottom: 10px;
  width: 60px;

  border-radius: 50%;
`;
const Dot = styled.div`
  border: 1px solid #fb2e86;
  transform: rotate(-45deg);
  width: 10px;
  height: 9.89px;
  cursor: pointer;
  background-color: ${(props) => props.DotColor};
  &:active {
    background-color: #fb2e86;
  }
`;
var timer;
function Slider() {
  const [pageIndex, setPageIndex] = useState(0);

    timer = setTimeout(() => {
      if (pageIndex === 2) {
          clearTimeout(timer);

        setPageIndex(0);
      } else {
        setPageIndex((prev) => prev + 1);
      }
    }, 8000);
  const handleClick = (direction) => {
    if (direction === "left") {
      setPageIndex(pageIndex > 0 ? pageIndex - 1 : 2);
    } else {
      setPageIndex(pageIndex < 2 ? pageIndex + 1 : 0);
    }
    clearTimeout(timer);
  };
  const DotClick = (index) => {
    setPageIndex(index);
    clearTimeout(timer);
  };
  return (
    <SliderPages>
      <Wrap PageIndex={pageIndex}>
        <Sections>
          <HomePageSectionOne />
        </Sections>
        <Sections>
          <HomePageSectionThree height="700px" styled={{width:"100vw"}} BackGroundColor="#FFF6FB" />
        </Sections>
        <Sections>
          <HomePageSectionOne  />
        </Sections>
      </Wrap>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        {" "}
        <ArrowBackIosNewOutlined />
      </Arrow>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        {" "}
        <ArrowForwardIosOutlined />
      </Arrow>

      <DotContainer>
        {Array.from({ length: 3 }).map((item, index) => (
          <Dot
            key={index}
            DotColor={pageIndex === index ? "#FB2E86" : ""}
            onClick={() => DotClick(index)}></Dot>
        ))}
      </DotContainer>
    </SliderPages>
  );
}

export default Slider;
