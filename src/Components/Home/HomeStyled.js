import styled from "styled-components";
export const Container = styled.div`
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

export const Image = styled.img`
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

export const Content = styled.div`
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

export const Header = styled.h1`
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

export const InputContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
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

export const Button = styled.button`
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

export const Type = styled.p`
  font-size: 17px;
  position: absolute;
  z-index: 1000;
  top: 13px;
  right: 15px;
  font-family: "Arvo", serif;
  color: rgba(140, 140, 140);
`;
