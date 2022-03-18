import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

const Container = styled.div``;

function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </>
  );
}

export default App;
