import React, { useState } from "react";
import { data } from "../../data/dietList";
import Menu from "../Menu/Menu";
import {
  Container,
  Image,
  Content,
  Head,
  Text,
  SubText,
  Button,
} from "./ResultStyled";

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
      {isOpen && <Menu dietList={dietList} />}
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
