import { IoDiamondOutline } from "react-icons/io5";
import { Container, Row, Col, Card,Button } from "react-bootstrap";


function Categories() {
    return (
        <>
            <div className="categories_section">
                <div className="categories_caption">
                    <h3>Our Categories</h3>
                    <IoDiamondOutline  className="diamond_icon" />
                    <IoDiamondOutline className="diamond_iconb" />
                    <IoDiamondOutline  className="diamond_icon"/>

                    <p>Lorem ipsum dolor sit amet
                        <br></br>
                        consectetueradipiscing elit, sed diam nonummy nibh
                    </p>
                </div>
            </div>

            <div className=" categories_images">
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={require("../image/asset 22.png")} />
                                     {/* <Button variant="secondary" className='btn'>Shop Now</Button> */}
                                <Card.Body className="images_caption">
                                    <Card.Title> Necklaces And Rings</Card.Title>
                                    <Card.Text>View The Collection</Card.Text>


                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={require("../image/asset 23.png")} />
                                <Card.Body className="images_caption">
                                    <Card.Title>Necklaces And Rings</Card.Title>

                                    <Card.Text>View The Collection</Card.Text>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={require("../image/asset 24.png")} />
                                <Card.Body className="images_caption">
                                    <Card.Title> Necklaces And Rings</Card.Title>

                                    <Card.Text>View The Collection</Card.Text>

                                </Card.Body>
                            </Card>

                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={require("../image/asset 24.png")} />
                                <Card.Body className="images_caption">
                                    <Card.Title>Necklaces And Rings</Card.Title>

                                    <Card.Text>View The Collection</Card.Text>

                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>
            </>
            );
    }
export default Categories;
