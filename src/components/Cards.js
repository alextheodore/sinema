import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import data from './../data.json'

function Cards() {
  console.log(data.movies[0])
  return (
    <Container className="contain">
      <Row>
        <Col style={{ border: "1px solid black" }} className="border">
          <Image src={"data:image/png;base64," + data.movies[0].image} className="img-cover"/>
          <div className="body">
            <div className="card1">
              <h3>{data.movies[0].title}</h3>
              <p>{data.movies[0].genre}</p>
              <p>{data.movies[0].director}</p>
              {/* <p>{data.movies[0].description}</p> */}
              <p>{data.movies[0].StudioId}</p>
              <Button variant="primary" href="DetailPage.js">Detail</Button>
            </div>
          </div>
        </Col>

        <Col style={{ border: "1px solid black" }} className="border">
        <Image src={"data:image/png;base64," + data.movies[1].image} className="img-cover"/>
          <div className="body">
            <div className="title">
              <h3>{data.movies[1].title}</h3>
              <p>{data.movies[1].genre}</p>
              <p>{data.movies[1].director}</p>
              {/* <p>{data.movies[1].description}</p> */}
              <p>{data.movies[1].StudioId}</p>
              <Button variant="primary" href="#action8">Detail</Button>
            </div>
          </div>
        </Col>
        <Col style={{ border: "1px solid black" }} className="border">
        <Image src={"data:image/png;base64," + data.movies[2].image} className="img-cover"/>
          <div className="body">
            <div className="title">
              <h3>{data.movies[2].title}</h3>
              <p>{data.movies[2].genre}</p>
              <p>{data.movies[2].director}</p>
              {/* <p>{data.movies[2].description}</p> */}
              <p>{data.movies[2].StudioId}</p>
              <Button variant="primary" href="#action9">Detail</Button>
            </div>
          </div>
        </Col>
        <Col style={{ border: "1px solid black" }} className="border">
        <Image src={"data:image/png;base64," + data.movies[3].image} className="img-cover"/>
          <div className="body">
            <div className="title">
              <h3>{data.movies[3].title}</h3>
              <p>{data.movies[3].genre}</p>
              <p>{data.movies[3].director}</p>
              {/* <p>{data.movies[3].description}</p> */}
              <p>{data.movies[3].StudioId}</p>
              <Button variant="primary" href="#action10">Detail</Button>
            </div>
          </div>
        </Col>
        <Col style={{ border: "1px solid black" }} className="border">
        <Image src={"data:image/png;base64," + data.movies[4].image} className="img-cover"/>
          <div className="body">
            <div className="title">
              <h3>{data.movies[4].title}</h3>
              <p>{data.movies[4].genre}</p>
              <p>{data.movies[4].director}</p>
              {/* <p>{data.movies[4].description}</p> */}
              <p>{data.movies[4].StudioId}</p>
              <Button variant="primary" href="#action11">Detail</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
