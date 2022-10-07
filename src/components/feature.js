import { Col, Container, Row } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";



function Feature() {
    return (
        <>
            <div className="feature_section">
                <Container>
                    <Row>
                        <Col>
                             <div className="pro_img">
                                <img src={require("../image/asset 21.jpeg")} ></img>
                            </div>
                        </Col>
                        <Col>
                            <div className="pro_caption">
                                <h3>
                                    Featured Product
                                </h3>
                                <p>
                                    This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin.
                                </p>
                                <h5>
                                High Designer Jewellery
                                </h5>
                                <p>Availability:<span>In stock</span></p>
                                <AiFillStar className="star_icon"/>
                                <AiFillStar className="star_icon"/>
                                <AiFillStar className="star_icon"/>
                                <AiFillStar className="star_icon"/>
                                <AiFillStar className="star_icon"/>
                                <h6>101.00$</h6>
                                <button>Purchase Now</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>


    );
}
export default Feature;