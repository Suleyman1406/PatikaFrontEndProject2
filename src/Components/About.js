import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 40px;
  @media only screen and (max-width: 950px) {
    text-align: center;
    padding: 30px 25px;
  }
  @media only screen and (max-width: 800px) {
    text-align: center;
    padding: 20px 15px;
  }
`;

const Image = styled.img`
  width: 500px;
  float: left;
  max-width: 90%;
  transform: translateY(100px);
  @media only screen and (max-width: 1150px) {
    width: 400px;
  }
  @media only screen and (max-width: 950px) {
    float: none;
    transform: translateY(0);
  }
`;

const Content = styled.div`
  width: calc(80% - 500px);
  float: left;
  @media only screen and (max-width: 1450px) {
    width: calc(90% - 500px);
  }
  @media only screen and (max-width: 1300px) {
    width: calc(100% - 500px);
  }
  @media only screen and (max-width: 1150px) {
    width: calc(100% - 400px);
  }
  @media only screen and (max-width: 950px) {
    float: none;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: start;
  }
`;

const Head = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 35px;
  margin: 5px;
  transition: 0.2s all;
  @media only screen and (max-width: 1150px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 950px) {
    font-size: 28px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 25px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 22px;
  }
`;

const Text = styled.p`
  font-family: "'Arvo', serif";
  font-size: 17px;
  word-spacing: 1px;
  letter-spacing: 0.4px;
  padding: 5px 20px;
  color: rgba(120, 120, 120);
  @media only screen and (max-width: 1150px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 950px) {
    font-size: 15px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 14px;
    word-spacing: 0.7px;
    letter-spacing: 0.2px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 13px;
  }
`;

const SubHead = styled.h2`
  font-family: "Dancing Script", cursive;
  margin: 5px;
  font-size: 30px;
  @media only screen and (max-width: 1150px) {
    font-size: 29px;
  }
  @media only screen and (max-width: 950px) {
    font-size: 26px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 23px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 21px;
  }
`;

const About = () => {
  return (
    <Container className="clearfix">
      <Image src="images/about.jpg" />
      <Content>
        <Head>What is the body mass index (BMI)?</Head>
        <Text>
          The body mass index (BMI) is a measure that uses your height and
          weight to work out if your weight is healthy.
          <br />
          The BMI calculation divides an adult's weight in kilograms by their
          height in metres squared. For example, A BMI of 25 means 25kg/m2.
        </Text>
        <SubHead>BMI ranges</SubHead>
        <Text>
          For most adults, an ideal BMI is in the 18.5 to 24.9 range. For
          children and young people aged 2 to 18, the BMI calculation takes into
          account age and gender as well as height and weight.
          <br />
          If your BMI is:
          <br />
          below 18.5 – you're in the underweight range
          <br />
          between 18.5 and 24.9 – you're in the healthy weight range
          <br />
          between 25 and 29.9 – you're in the overweight range
          <br />
          between 30 and 39.9 – you're in the obese range
          <br />
          If you want to calculate your BMI, try our healthy weight calculator.
          <br />
        </Text>
        <SubHead>Accuracy of BMI</SubHead>
        <Text>
          BMI takes into account natural variations in body shape, giving a
          healthy weight range for a particular height.
          <br />
          As well as measuring your BMI, healthcare professionals may take other
          factors into account when assessing if you're a healthy weight.
          <br />
          Muscle is much denser than fat, so very muscular people, such as
          heavyweight boxers, weight trainers and athletes, may be a healthy
          weight even though their BMI is classed as obese.
          <br />
          Your ethnic group can also affect your risk of some health conditions.
          For example, adults of South Asian origin may have a higher risk of
          some health problems, such as diabetes, with a BMI of 23, which is
          usually considered healthy.
          <br />
          You should not use BMI as a measure if you're pregnant. Get advice
          from your midwife or GP if you're concerned about your weight.
        </Text>
      </Content>
    </Container>
  );
};

export default About;
