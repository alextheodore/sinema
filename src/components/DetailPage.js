import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import data from '../data.json'
import { useLocation } from 'react-router-dom';

function DetailPage() {
  const location = useLocation()
  console.log("test", location.state.title)
  return (
    <Container fluid>
      <Row>
        <h2 className='title'>Now Playing</h2>
        <Col>
            <Image src={"data:image/png;base64," + location.state.image} className="img-detail"/>
            <h2>{location.state.title}</h2>
        </Col>
      </Row>
      <h3></h3>
    </Container>
  );
}

export default DetailPage;