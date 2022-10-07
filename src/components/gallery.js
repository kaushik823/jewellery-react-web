import { Card, Container, Row, Col } from 'react-bootstrap';

function Gallery() {
    return (
        <>
            <div className="gallery_section">
                <Container>
                    <Row className="gallery">
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={require("../image/asset 9.jpeg")} />
                                <div>
                                    
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={require("../image/asset 10.jpeg")} />
                             
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={require("../image/asset 11.jpeg")} />
                            
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    );
}
export default Gallery;