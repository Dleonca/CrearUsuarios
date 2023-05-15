import { useState } from "react";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css';
import Formulario from "./components/Formulario";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, Row, Col, Container } from "react-bootstrap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="sm"
    >
      <Container>
        <Row>
          <Col>
            <Formulario />
          </Col>
        </Row>
      </Container>
    </ThemeProvider>

    /* <>
      <Formulario/>
    </> */
  );
}

export default App;
