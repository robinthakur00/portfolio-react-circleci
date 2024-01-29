import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container id="about" className="py-5 text-center">
      <Row>
        <Col>
          <h2 className="text-info mb-4">About Me</h2>
          <p className="lead">
            Welcome to my portfolio! I am a passionate web developer with a love for creating
            engaging and responsive web applications. I believe in the power of technology to
            transform ideas into reality.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutMe;

