import React from "react";
import {
  Container,
  Image,
  Content,
  Table,
  Tr,
  THead,
  TData,
} from "./HistoryStyled";

const History = () => {
  const arr = JSON.parse(localStorage.getItem("BMIhistory")) || [];
  console.log(arr);
  return (
    <Container className="clearfix">
      <Image src="images/history.jpg" />
      <Content>
        <Table>
          <thead>
            <Tr>
              <THead>Name</THead>
              <THead>BMI</THead>
              <THead>Result</THead>
            </Tr>
          </thead>
          <tbody>
            {arr.map((item, i) => (
              <Tr key={i}>
                <TData>{item.name}</TData>
                <TData>{item.bmi}</TData>
                <TData>{item.res}</TData>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
};

export default History;
