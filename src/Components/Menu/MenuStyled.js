import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100%;
  float: left;
  @media only screen and (max-width: 1050px) {
    margin-top: 40px;
  }
`;

export const MenuCard = styled.div`
  width: 30%;
  height: 490px;
  border-radius: 10px;
  background-image: url("images/foodBg.jpg");
  background-color: #cccccc;
  background-size: cover;
  padding: 20px 30px;
  font-family: "Dancing Script", cursive;
  float: left;
  margin: 20px;
  box-shadow: rgba(245, 198, 94, 0.75) 0px 14px 28px,
    rgba(245, 198, 94, 0.72) 0px 10px 10px;
  @media only screen and (max-width: 1300px) {
    width: 27%;
    height: 400px;
    padding: 15px 20px;
  }
  @media only screen and (max-width: 1150px) {
    width: 40%;
    float: none;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    height: fit-content;
  }
  @media only screen and (max-width: 1050px) {
    width: 60%;
    text-align: start;
  }
  @media only screen and (max-width: 850px) {
    width: 80%;
    text-align: start;
  }
  @media only screen and (max-width: 650px) {
    width: 90%;
    text-align: start;
  }
`;

export const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const MenuHead = styled.h2`
  font-size: 40px;
  margin-left: 15px;
  font-weight: 800;
  @media only screen and (max-width: 1850px) {
    font-size: 35px;
  }
  @media only screen and (max-width: 1450px) {
    font-size: 32px;
    margin-left: 10px;
  }
  @media only screen and (max-width: 1150px) {
    font-size: 35px;
  }
`;

export const MenuItem = styled.h3`
  font-size: 25px;
  margin-left: 30px;
  @media only screen and (max-width: 1850px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 1450px) {
    font-size: 20px;
    margin-left: 20px;
  }
  @media only screen and (max-width: 1150px) {
    font-size: 22px;
  }
`;
