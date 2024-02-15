import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import data from '../data.json'

function DetailPage() {
  return (
    <Container fluid>
      <Row>
        <h2 className='title'>Now Playing</h2>
        <Col>
            <Image src={"data:image/png;base64," + data.movies[0].image} className="img-detail"/>
        </Col>
      </Row>
    </Container>
  );
}

export default DetailPage;