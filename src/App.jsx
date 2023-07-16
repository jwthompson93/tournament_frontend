import './App.css';
import Pairings from './Tournament/Pairings';
import { Col, Container, Row } from 'react-bootstrap';
import NavMenu from './General/NavMenu';

function App() {
  const styling = { 
    "width": "100%"
  };

  return (
    <div className="App">
      <Row>
        <Col xs={2}><NavMenu></NavMenu></Col>
        <Col>
          <Pairings></Pairings>
        </Col>
      </Row>
    </div>
  );
}

export default App;
