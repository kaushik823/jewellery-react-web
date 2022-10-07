import { Carousel, Button} from 'react-bootstrap';


function Slider() {
  return (
    <div className="slider section">
      <Carousel>
      <Carousel.Item>
      <img src={require("../image/asset 3.jpeg")}></img>
        <Carousel.Caption className='image_caption' text-left>
        <h1>Designer Jewellery</h1>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              <br></br>
              lorem quis bibendum auctor elit
            </p>
            <Button variant="secondary" className='btn'>Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require("../image/asset 5.jpeg")}></img>
        <Carousel.Caption className='image_caption'>
        <h1>Designer Jewellery</h1>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              <br></br>
              lorem quis bibendum auctor elit
            </p>
            <Button variant="secondary" className='btn'>Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={require("../image/asset 7.jpeg")}></img>
        <Carousel.Caption className='image_caption'>
        <h1>Designer Jewellery</h1>
        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              <br></br>
              lorem quis bibendum auctor elit
            </p>
            <Button variant="secondary" className='btn'>Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
     </div>
  );
}

export default Slider;
