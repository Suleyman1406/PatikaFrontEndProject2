import React, { useState } from "react";
import styled from "styled-components";
import { dietList as data, dietList } from "../data/dietList";

const Container = styled.div`
  display: inline-block;
`;

const Image = styled.img`
  width: 750px;
  float: left;
  transform: translateY(-70px);
  @media only screen and (max-width: 1550px) {
    width: 600px;
  }
  @media only screen and (max-width: 1300px) {
    width: 500px;
    transform: translateY(0);
  }
  @media only screen and (max-width: 1050px) {
    float: none;
    width: 350px;
    max-width: 90%;
  }
`;

const Content = styled.div`
  width: calc(100% - 750px);
  float: left;
  padding: 40px 30px;
  transform: translateY(40px);
  @media only screen and (max-width: 1750px) {
    padding: 40px 30px;
  }
  @media only screen and (max-width: 1550px) {
    width: calc(100% - 600px);
  }
  @media only screen and (max-width: 1300px) {
    width: calc(100% - 500px);
  }
  @media only screen and (max-width: 1050px) {
    float: none;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding: 35px 25px;
  }
  @media only screen and (max-width: 850px) {
    width: 90%;
    padding: 30px 20px;
  }
  @media only screen and (max-width: 650px) {
    width: 100%;
    padding: 20px 10px;
  }
`;
const Head = styled.h1`
  font-size: 40px;
  margin: 0;
  font-family: "Dancing Script", cursive;
  @media only screen and (max-width: 1550px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 1050px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 850px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 650px) {
    font-size: 24px;
  }
`;

const Text = styled.h2`
  font-size: 35px;
  margin: 0;
  font-family: "Dancing Script", cursive !important;
  @media only screen and (max-width: 1550px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 1050px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 850px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 650px) {
    font-size: 22px;
  }
`;

const SubText = styled.h2`
  font-family: "Arvo", serif;
  font-size: 22px;
  margin-top: 20px;
  @media only screen and (max-width: 1550px) {
    font-size: 20px;
  }
`;

const Button = styled.button`
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: rgba(245, 198, 94);
  border-radius: 5px;
  padding: 3px;
  margin: 0;
  transform: translateY(1px);
  &:hover {
    background-color: rgba(190, 190, 190, 0.2);
  }
`;

const DietListContainer = styled.div`
  width: 100%;
  float: left;
  @media only screen and (max-width: 1050px) {
    margin-top: 40px;
  }
`;

const Menu = styled.div`
  width: 30%;
  height: 490px;
  border-radius: 10px;
  background-image: url("images/foodBg.jpg");
  background-color: #cccccc;
  background-size: cover;
  padding: 20px 30px;
  font-family: "Dancing Script", cursive;
  float: left;
  margin: 20px;
  box-shadow: rgba(245, 198, 94, 0.75) 0px 14px 28px,
    rgba(245, 198, 94, 0.72) 0px 10px 10px;
  @media only screen and (max-width: 1300px) {
    width: 27%;
    height: 400px;
    padding: 15px 20px;
  }
  @media only screen and (max-width: 1150px) {
    width: 40%;
    float: none;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    height: fit-content;
  }
  @media only screen and (max-width: 1050px) {
    width: 60%;
    text-align: start;
  }
  @media only screen and (max-width: 850px) {
    width: 80%;
    text-align: start;
  }
  @media only screen and (max-width: 650px) {
    width: 90%;
    text-align: start;
  }
`;

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.7);
`;

const MenuHead = styled.h2`
  font-size: 40px;
  margin-left: 15px;
  font-weight: 800;
  @media only screen and (max-width: 1850px) {
    font-size: 35px;
  }
  @media only screen and (max-width: 1450px) {
    font-size: 32px;
    margin-left: 10px;
  }
  @media only screen and (max-width: 1150px) {
    font-size: 35px;
  }
`;

const MenuItem = styled.h3`
  font-size: 25px;
  margin-left: 30px;
  @media only screen and (max-width: 1850px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 1450px) {
    font-size: 20px;
    margin-left: 20px;
  }
  @media only screen and (max-width: 1150px) {
    font-size: 22px;
  }
`;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Result = ({ result }) => {
  const [isOpen, setIsopen] = useState(false);
  const toggle = () => {
    setIsopen(!isOpen);
  };
  let dietList;
  if (result.res === "normal") dietList = data.normal;
  else if (result.res === "under weight") dietList = data.underWeight;
  else if (result.res === "overweight") dietList = data.overWeight;
  else dietList = data.obesity;
  return (
    <Container>
      <Image src="images/resultImage.png" />
      <Content>
        <Head>
          Hello {capitalize(result.name)}, your body mass index is{" "}
          <span style={{ fontSize: "30px", color: "rgba(245, 198, 94)" }}>
            {result.bmi}.
          </span>
        </Head>
        <Text>
          You are{" "}
          <span style={{ fontSize: "30px", color: result.color }}>
            {result.res}.
          </span>{" "}
        </Text>
        <SubText>
          {result.res === "normal"
            ? "Congratulations! Maintain a well-balanced and consistent diet."
            : "We recommend working with a dietitian to gain a healthy weight."}
        </SubText>
        <SubText>
          Click to see the <span style={{ fontWeight: "bold" }}>diet list</span>{" "}
          specially prepared for you. 👉
          <Button onClick={toggle}>Click Me</Button>
        </SubText>
      </Content>
      {isOpen && (
        <DietListContainer>
          <Menu>
            <MenuContainer>
              <MenuHead>Breakfast</MenuHead>
              {dietList.breakfast.map((item, i) => (
                <MenuItem key={i}>-{item}</MenuItem>
              ))}
            </MenuContainer>
          </Menu>
          <Menu>
            <MenuContainer>
              <MenuHead>Launch</MenuHead>
              {dietList.launch.map((item, i) => (
                <MenuItem key={i}>-{item}</MenuItem>
              ))}
            </MenuContainer>
          </Menu>
          <Menu>
            <MenuContainer>
              <MenuHead>Dinner</MenuHead>
              {dietList.breakfast.map((item, i) => (
                <MenuItem key={i}>-{item}</MenuItem>
              ))}
            </MenuContainer>
          </Menu>
        </DietListContainer>
      )}
      <div
        style={{
          height: "200px",
          width: "100%",
          float: "left",
        }}
      ></div>
    </Container>
  );
};

export default Result;
