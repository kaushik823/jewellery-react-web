// import { IoDiamondOutline } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";

import { Container, Row, Col, Card } from "react-bootstrap";

function Product() {
    return (
        <>

            <div className="product_section">
                <div className="product_caption">
                    <h3>Our Categories</h3>
                    <IoDiamondOutline className="diamond_icon" />
                    <IoDiamondOutline className="diamond_iconb" />
                    <IoDiamondOutline className="diamond_icon" />

                    <p>Lorem ipsum dolor sit amet
                        <br></br>
                        consectetueradipiscing elit, sed diam nonummy nibh
                    </p>
                </div>
            </div>
            <div className="images">
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={require("../image/asset 13.png")} />
                                {/* <Button variant="secondary" className='btn'>Shop Now</Button> */}
                                <Card.Body className="images_caption">
                                    <Card.Title> High Designer Jewellery</Card.Title>
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <BsStarHalf className="star_iconh" />

                                    <Card.Text>100.00$</Card.Text>


                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={require("../image/asset 14.png")} />
                                <Card.Body className="images_caption">
                                    <Card.Title> High Designer Jewellery</Card.Title>
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <BsStarHalf className="star_iconh" />
                                    <Card.Text>100.00$</Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={require("../image/asset 15.png")} />
                                <Card.Body className="images_caption">
                                    <Card.Title> High Designer Jewellery</Card.Title>
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <BsStarHalf className="star_iconh" />
                                    <Card.Text>100.00$</Card.Text>

                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={require("../image/asset 12.png")} />
                                <Card.Body className="images_caption">
                                    <Card.Title> High Designer Jewellery</Card.Title>
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <BsStarHalf className="star_iconh" />
                                    <Card.Text>100.00$</Card.Text>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="images">
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={require("../image/asset 17.png")} />
                                <Card.Body className="images_caption">
                                    <Card.Title> High Designer Jewellery</Card.Title>
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <BsStarHalf className="star_iconh" />
                                    <Card.Text>100.00$</Card.Text>


                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={require("../image/asset 18.png")} />
                                <Card.Body className="images_caption">
                                    <Card.Title> High Designer Jewellery</Card.Title>
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <BsStarHalf className="star_iconh" />

                                    <Card.Text>100.00$</Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={require("../image/asset 19.png")} />
                                <Card.Body className="images_caption">
                                    <Card.Title> High Designer Jewellery</Card.Title>
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <BsStarHalf className="star_iconh" />
                                    <Card.Text>100.00$</Card.Text>

                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={require("../image/asset 20.png")} />
                                <Card.Body className="images_caption">
                                    <Card.Title> High Designer Jewellery</Card.Title>
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <AiFillStar className="star_icon" />
                                    <BsStarHalf className="star_iconh" />
                                    <Card.Text>100.00$</Card.Text>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    );
}
export default Product;