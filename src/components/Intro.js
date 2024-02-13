import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselImage';

function Intro() {
  return (
    <Carousel className='main'>
      <Carousel.Item>
        <CarouselImage text="First slide" value='Carousel1.jpg'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Second slide" value='Carousel2.jpg'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <CarouselImage text="Third slide" value='Carousel3.jpg'/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Intro;