import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import constructionGif from './assets/Under construction-pana.png'

function App() {
  return (
    <div className="App">
      <Container className="text-center" style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} md={8} lg={6}>
            <img 
              src={constructionGif} 
              alt="Under Construction" 
              style={{ width: "100%", height: "auto", maxWidth: "450px", maxHeight: "300px" }}  
            />
            <h1>Our site is <b>UNDER CONSTRUCTION</b></h1>
            <p>Please contact us at <b>+919788825633</b> for further information.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
