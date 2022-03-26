import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const BannersDisplay = () => {
  return (
    <Container fluid className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col xs="12" sm="5" className="p-0">
          <Card className="bg-dark text-white border-0">
            <Card.Img
              data-cy="banner-image-1"
              src="images/sportshoes_banner_1.jpg"
              alt="footer banner image 1"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col xs="12" sm="5" className="p-0">
          <Card className="bg-dark text-white border-0">
            <Card.Img
              data-cy="banner-image-2"
              src="images/sportshoes_banner_2.jpg"
              alt="footer banner image 1"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BannersDisplay;
