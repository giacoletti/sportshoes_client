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
              className="rounded-0"
            />
            <Card.ImgOverlay style={{ top: "auto", bottom: "5%" }}>
              <Card.Title data-cy="banner-title-1">
                FIGHT LIKE A SPIDER
              </Card.Title>
              <Card.Text
                data-cy="banner-description-1"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "grey"
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                modi cum quisquam quaerat laboriosam reiciendis impedit placeat
                rem temporibus!
              </Card.Text>
              <Card.Text data-cy="banner-link-1">
                <a href="#" className="link-light">
                  READ MORE
                </a>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col xs="12" sm="5" className="p-0">
          <Card className="bg-dark text-white border-0 rounded-0">
            <Card.Img
              data-cy="banner-image-2"
              src="images/sportshoes_banner_2.jpg"
              alt="footer banner image 2"
              className="rounded-0"
            />
            <Card.ImgOverlay style={{ top: "auto", bottom: "5%" }}>
              <Card.Title data-cy="banner-title-2">
                RUN LIKE A CHEETAH
              </Card.Title>
              <Card.Text
                data-cy="banner-description-2"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  color: "grey"
                }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                modi cum quisquam quaerat laboriosam reiciendis impedit placeat
                rem temporibus!
              </Card.Text>
              <Card.Text data-cy="banner-link-2">
                <a href="#" className="link-light">
                  READ MORE
                </a>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BannersDisplay;
