import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { GiWeightScale, GiBodyHeight } from "react-icons/gi";
import { css } from "styled-components";
import { useBMI } from "../Context/BMIContext";
import Result from "./Result";
const Container = styled.div`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 150px;
  @media only screen and (max-width: 1750px) {
    padding-top: 130px;
    width: 85%;
  }
  @media only screen and (max-width: 1500px) {
    padding-top: 110px;
    width: 95%;
  }
  @media only screen and (max-width: 1200px) {
    padding-top: 90px;
    width: 100%;
  }
  @media only screen and (max-width: 1050px) {
    padding-top: 40px;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 600px;
  float: left;
  transform: translateY(-65px);

  @media only screen and (max-width: 1050px) {
    float: none;
    width: 350px;
    max-width: 90%;
    transform: translateY(0);
  }
`;

const Content = styled.div`
  width: calc(100% - 600px);
  float: left;
  transition: 0.2s all;
  padding: 40px 50px;

  @media only screen and (max-width: 1050px) {
    float: none;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    padding: 35px 45px;
  }
  @media only screen and (max-width: 850px) {
    width: 90%;
    padding: 30px 40px;
  }
  @media only screen and (max-width: 650px) {
    width: 100%;
    padding: 20px 30px;
  }
`;

const Header = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 40px;
  margin-bottom: 30px;
  @media only screen and (max-width: 1050px) {
    font-size: 35px;
  }
  @media only screen and (max-width: 850px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 650px) {
    font-size: 28px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 13px 10px;
  padding-left: 45px;
  padding-right: 40px;
  border: 1px solid #81d4fa;
  outline: none;
  transition: 0.2s all;
  font-size: 17px;
  border-radius: 5px;
  margin-bottom: 30px;
  letter-spacing: 0.5px;
  word-spacing: 1px;
  box-shadow: rgba(129, 212, 250, 0.45) 0px 5px 15px;
  &:hover {
    box-shadow: rgba(129, 212, 250, 0.75) 0px 5px 15px;
  }
  &:focus {
    box-shadow: rgba(129, 212, 250, 0.95) 0px 5px 15px;
  }
`;

const Icon = css`
  position: absolute;
  font-size: 27px;
  left: 8px;
  color: rgba(129, 212, 250);
  top: 14px;
`;

const NameIcon = styled(MdOutlineDriveFileRenameOutline)`
  ${Icon}
`;

const WeightIcon = styled(GiWeightScale)`
  ${Icon}
`;
const HeightIcon = styled(GiBodyHeight)`
  ${Icon}
`;
const Button = styled.button`
  width: 100%;
  padding: 4px;
  border: none;
  font-family: "Dancing Script", cursive;
  color: white;
  font-weight: 800;
  font-size: 25px;
  border-radius: 5px;
  background-color: rgba(129, 212, 250);
  transition: 0.2s all;
  &:hover {
    background-color: rgba(129, 212, 250, 0.6);
    transform: translateY(-2px);
  }
`;

const Type = styled.p`
  font-size: 17px;
  position: absolute;
  z-index: 1000;
  top: 13px;
  right: 15px;
  font-family: "Arvo", serif;
  color: rgba(140, 140, 140);
`;

const calcBMI = (weight, height) => {
  let bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let res;
  let color;
  if (bmi < 18.5) {
    res = "under weight";
    color = "rgb(1,166,170)";
  } else if (bmi >= 18.5 && bmi < 25) {
    res = "normal";
    color = "rgb(27,155,0)";
  } else if (bmi >= 25 && bmi < 30) {
    res = "overweight";
    color = "rgb(237,176,0)";
  } else if (bmi >= 30 && bmi < 35) {
    res = "obese";
    color = "rgb(255,104,1)";
  } else {
    res = "extremly obese";
    color = "rgb(228,40,31)";
  }
  return { bmi, res, color };
};

const writeToStorage = (name, bmi, res, arr) => {
  localStorage.setItem(
    "BMIhistory",
    JSON.stringify([...arr, { name, bmi, res }])
  );
};

const Home = () => {
  const { hasResult, setHasResult } = useBMI();
  const [result, setResult] = useState({});
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const arr = JSON.parse(localStorage.getItem("BMIhistory")) || [];
  const calculate = (e) => {
    e.preventDefault();
    setHasResult(true);
    const { bmi, res, color } = calcBMI(weight, height);
    writeToStorage(name, bmi, res, arr);
    setName("");
    setWeight("");
    setHeight("");
    setResult({ bmi, res, name, color });
  };

  return (
    <Container className="clearfix">
      {!hasResult ? (
        <>
          <Image src="images/health.jpg" />
          <Content>
            <Header> Calculate BMI </Header>
            <form onSubmit={calculate}>
              <InputContainer>
                <NameIcon />
                <Input
                  maxLength="30"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                  placeholder="Your name and surname ..."
                />
              </InputContainer>
              <InputContainer>
                <WeightIcon />
                <Input
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  type="number"
                  max="250"
                  min="20"
                  required
                  placeholder="Your weight ..."
                />
                <Type>kg</Type>
              </InputContainer>
              <InputContainer>
                <HeightIcon />
                <Input
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  type="number"
                  max="250"
                  min="50"
                  required
                  placeholder="Your height ..."
                />
                <Type>cm</Type>
              </InputContainer>
              <Button type="submit">Calculate</Button>
            </form>
          </Content>
        </>
      ) : (
        <Result result={result} />
      )}
    </Container>
  );
};

export default Home;
