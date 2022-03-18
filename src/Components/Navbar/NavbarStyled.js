import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: #81d4fa;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: fit-content;
  }
  @media only screen and (max-width: 450px) {
  }
`;

export const Logo = styled.h1`
  font-family: "Dancing Script", cursive;
  transform: translateY(5px);
  margin-left: 20px;
  font-weight: bold;
  font-size: 32px;
  color: white;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const LogoImage = styled.img`
  width: 45px;
  margin-left: 10px;
  display: none;
  @media only screen and (max-width: 1000px) {
    display: inline-block;
  }
  @media only screen and (max-width: 1000px) {
    width: 40px;
  }
`;

export const Links = styled.div`
  margin-left: auto;
  margin-right: 20px;
`;

export const Link = styled(LinkR)`
  color: white;
  font-family: "Dancing Script", cursive;
  font-size: 24px;
  padding: 15px;
  margin-left: 40px;
  transition: 0.4s all;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: rgba(245, 198, 94);
  }
  @media only screen and (max-width: 1000px) {
    font-size: 22px;
    margin-left: 30px;
  }
  @media only screen and (max-width: 800px) {
    font-size: 20px;
    margin-left: 20px;
  }
  @media only screen and (max-width: 700px) {
    font-size: 19px;
    margin-left: 10px;
  }
  @media only screen and (max-width: 650px) {
    display: block;
    padding: 3px 5px;
    font-size: 18px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 16px;
  }
`;
