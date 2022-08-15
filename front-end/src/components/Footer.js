import React from "react";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

function Footer() {
  return (
    <div className="bg-dark mt-3">
      <Row>
        <Col md={1}></Col>
        <Col md={3}>
          <Card className="bg-dark text-white mt-3">
            <CardHeader className="fw-bold fs-4 text-start">Discover</CardHeader>
            <Card.Body className="text-muted text-start">
              <Card.Text>Investors</Card.Text>
              <Card.Text>About Us</Card.Text>
              <Card.Text>Takeaway</Card.Text>
              <Card.Text>More</Card.Text>
              <Card.Text>Newsroom</Card.Text>
              <Card.Text>Foodscene Blog</Card.Text>
              <Card.Text>Design Blog</Card.Text>
              <Card.Text>Career</Card.Text>
              <Card.Text>Become a Rider</Card.Text>
              <Card.Text>Restaurant Signup</Card.Text>
            </Card.Body>
          </Card>
        </Col>       
         <Col md={2}>
          <Card className="bg-dark text-white mt-3">
            <CardHeader className="fw-bold fs-4 text-start">Legal</CardHeader>
            <Card.Body className="text-muted text-start l">
              <Card.Text>Terms and conditions</Card.Text>
              <Card.Text>Privacy</Card.Text>
              <Card.Text>Cookies</Card.Text>
              <Card.Text>Modern Slavery</Card.Text>
              <Card.Text>Tax Strategy</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={2}>
          <Card className="bg-dark text-white mt-3">
            <CardHeader className="fw-bold fs-4 text-start">Help</CardHeader>
            <Card.Body className="text-muted text-start">
              <Card.Text>Contact</Card.Text>
              <Card.Text>FAQs</Card.Text>
              <Card.Text>cuisines</Card.Text>
              <Card.Text>Brands</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="bg-dark text-white mt-3">
            <CardHeader className="fw-bold fs-4 text-center">Take Us with You</CardHeader>
            <Card.Body className="text-muted text-center mt-5">
              <Card.Text>
              <img width="150px" src="./images/apple.png" alt="" />
              </Card.Text>
              <Card.Text>
              <img width="150px" src="./images/google.webp" alt="" />
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
    
  );
}

export default Footer;
