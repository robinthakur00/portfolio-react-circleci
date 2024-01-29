import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Skills = () => {
  return (
    <Container id="skills" className="py-5 text-center">
      <Row>
        <Col>
          <h2 className="text-success mb-4">Skills</h2>
          <ul className="list-unstyled">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js</li>
            <li>Bootstrap</li>
            <li>Responsive Design</li>
            <li>Git and Version Control</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
