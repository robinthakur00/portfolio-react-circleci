import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container id="projects" className="py-5 text-center">
      <Row>
        <Col>
          <h2 className="text-warning mb-4">Projects</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title className="text-info">Portfolio Website</Card.Title>
                  <Card.Text>
                    This portfolio is built using React.js and Bootstrap. It showcases my skills
                    and projects in a visually appealing manner.
                  </Card.Text>
                  <Button variant="info" href="#" target="_blank">
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* Add more project cards as needed */}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
