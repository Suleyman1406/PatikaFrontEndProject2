import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
`;

export const Image = styled.img`
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

export const Content = styled.div`
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
export const Head = styled.h1`
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

export const Text = styled.h2`
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

export const SubText = styled.h2`
  font-family: "Arvo", serif;
  font-size: 22px;
  margin-top: 20px;
  @media only screen and (max-width: 1550px) {
    font-size: 20px;
  }
`;

export const Button = styled.button`
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
