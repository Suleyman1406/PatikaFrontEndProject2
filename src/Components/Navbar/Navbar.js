import React from "react";
import { Link as LinkR } from "react-router-dom";
import { useBMI } from "../../Context/BMIContext";
import { Container, Logo, LogoImage, Links, Link } from "./NavbarStyled";

const Navbar = () => {
  const { setHasResult } = useBMI();
  return (
    <Container>
      <LinkR onClick={() => setHasResult(false)} to="/">
        <Logo>Dada Calculate</Logo>
        <LogoImage src="images/logo.png" />
      </LinkR>
      <Links>
        <Link onClick={() => setHasResult(false)} to="/">
          Calculate BMI
        </Link>
        <Link onClick={() => setHasResult(false)} to="/about">
          What's the BMI?
        </Link>
        <Link onClick={() => setHasResult(false)} to="/history">
          BMI History
        </Link>
      </Links>
    </Container>
  );
};

export default Navbar;
