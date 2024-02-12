import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import data from './../data.json'

function Cards() {
  console.log(data.movies[0])
  return (
    <Container>
      <Row>
        <Col style={{ border: "1px solid black" }} className="border">
          <Image src="LOGO_AT.jpg" fluid />
          <div className="body">
            <div className="title">
              <h3>{data.movies[0].title}</h3>
              <p>{data.movies[0].genre}</p>
              <p>{data.movies[0].director}</p>
            </div>
          </div>
        </Col>

        <Col style={{ border: "1px solid black" }} className="border">
          <Image src="LOGO_AT.jpg" fluid />
          <div className="body">
            <div className="title">
              <h3>Pegasus</h3>
              <p>Ini adalah pegasus mini</p>
            </div>
          </div>
        </Col>
        <Col style={{ border: "1px solid black" }} className="border">
          <Image src="LOGO_AT.jpg" fluid />
          <div className="body">
            <div className="title">
              <h3>Pegasus</h3>
              <p>Ini adalah pegasus mini</p>
            </div>
          </div>
        </Col>
        <Col style={{ border: "1px solid black" }} className="border">
          <Image src="LOGO_AT.jpg" fluid />
          <div className="body">
            <div className="title">
              <h3>Pegasus</h3>
              <p>Ini adalah pegasus mini</p>
            </div>
          </div>
        </Col>
        <Col style={{ border: "1px solid black" }} className="border">
          <Image src="LOGO_AT.jpg" fluid />
          <div className="body">
            <div className="title">
              <h3>Pegasus</h3>
              <p>Ini adalah pegasus mini</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
