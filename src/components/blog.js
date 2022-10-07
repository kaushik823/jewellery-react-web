import { Container, Row, Col, Card } from "react-bootstrap";
import { IoDiamondOutline } from "react-icons/io5";


function Blog() {
    return (
        <>
            <div className="item_image">
                <img src={require("../image/asset 32.jpeg")} ></img>
            </div>


            <Container>
                <Row>
                    <Col>
                        <div className="blog_section">
                            <div className="blog_caption">
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
                    </Col>
                </Row>
            </Container>

            <div className="blog_image">
                <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={require("../image/asset 25.jpeg")} />
                                <Card.Body className="images_caption">
                                    <Card.Title> Lorem Ipsum Dolor</Card.Title>

                                    <p>Lorem Ipsum is simply dummy text of the rinting andey typesetting industry.</p>


                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={require("../image/asset 26.jpeg")} />
                                <Card.Body className="images_caption">
                                    <Card.Title> Lorem Ipsum Dolor</Card.Title>

                                    <Card.Text>Lorem Ipsum is simply dummy text of the rinting andey typesetting industry.</Card.Text>


                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={require("../image/asset 27.jpeg")} />
                                <Card.Body className="images_caption">
                                    <Card.Title> Lorem Ipsum Dolor</Card.Title>

                                    <Card.Text>Lorem Ipsum is simply dummy text of the rinting andey typesetting industry.</Card.Text>


                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default Blog;