import styled from "styled-components";

export const Container = styled.div`
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

export const Image = styled.img`
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

export const Content = styled.div`
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

export const Head = styled.h1`
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

export const Text = styled.p`
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

export const SubHead = styled.h2`
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
