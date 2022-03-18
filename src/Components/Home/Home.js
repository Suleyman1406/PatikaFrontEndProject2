import React, { useState } from "react";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { GiWeightScale, GiBodyHeight } from "react-icons/gi";
import { useBMI } from "../../Context/BMIContext";
import Result from "../Result/Result";
import {
  Container,
  Image,
  Content,
  Header,
  InputContainer,
  Input,
  Type,
  Button,
} from "./HomeStyled";
import Styles from "./Home.module.css";

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
                <MdOutlineDriveFileRenameOutline className={Styles.icon} />
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
                <GiWeightScale className={Styles.icon} />
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
                <GiBodyHeight className={Styles.icon} />
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

export default Home;
