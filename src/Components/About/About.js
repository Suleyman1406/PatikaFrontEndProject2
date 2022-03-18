import React from "react";
import { Container, Image, Content, Head, Text, SubHead } from "./AboutStyled";
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
