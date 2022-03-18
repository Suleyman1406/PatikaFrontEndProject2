import styled from "styled-components";
export const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  padding: 100px 40px;
  margin-bottom: 100px;
  @media only screen and (max-width: 1650px) {
    width: 100%;
  }
  @media only screen and (max-width: 1000px) {
    text-align: center;
    padding: 50px 20px;
  }
  @media only screen and (max-width: 650px) {
    text-align: center;
    padding: 40px 10px;
  }
  @media only screen and (max-width: 450px) {
    text-align: center;
    padding: 20px 5px;
  }
`;

export const Image = styled.img`
  width: 600px;
  float: left;
  @media only screen and (max-width: 1350px) {
    width: 500px;
  }
  @media only screen and (max-width: 1150px) {
    width: 400px;
  }
  @media only screen and (max-width: 1000px) {
    max-width: 90%;
    float: none;
  }
`;

export const Content = styled.div`
  width: calc(100% - 600px);
  float: left;
  padding: 20px 25px;
  @media only screen and (max-width: 1350px) {
    width: calc(100% - 500px);
  }
  @media only screen and (max-width: 1150px) {
    width: calc(100% - 400px);
  }
  @media only screen and (max-width: 1000px) {
    width: 80%;
    float: none;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
  }
  @media only screen and (max-width: 850px) {
    width: 95%;
  }
  @media only screen and (max-width: 650px) {
    padding: 10px 5px;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
    padding: 10px 1px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border: 1px solid rgba(245, 198, 94);
  text-align: center;
  box-shadow: rgb(245, 198, 94) 0px 20px 30px -10px;
  transform: translateY(80px);
  border-style: hidden;
  @media only screen and (max-width: 1000px) {
    transform: translateY(0);
  }
`;

export const Tr = styled.tr`
  transition: 0.2s all;
  &:nth-child(even) {
    background-color: rgba(180, 180, 180, 0.5);
  }
  &:hover {
    background-color: rgba(180, 180, 180, 0.8);
  }
`;

export const THead = styled.th`
  text-align: center;
  padding: 7px;
  background-color: rgba(120, 120, 120);
  color: white;
  font-family: "Dancing Script", cursive;
  font-weight: 800;
  font-size: 25px;
  @media only screen and (max-width: 650px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 20px;
  }
`;

export const TData = styled.td`
  text-align: center;
  padding: 10px;
  @media only screen and (max-width: 650px) {
    font-size: 14px;
  }
  @media only screen and (max-width: 450px) {
    font-size: 12px;
  }
`;
