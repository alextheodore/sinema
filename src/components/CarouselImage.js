import Image from "react-bootstrap/Image";

function CarouselImage(props) { // props -> parameter untuk menyimpan suatu data
  return (
    <div className="image d-flex justify-content-center" >
      <Image src={props.value}/>
    </div>
  );
}

export default CarouselImage;
