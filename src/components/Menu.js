import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Menu = () => {
  return (
    <Container>
      <Row>
        <div style={{ textAlign: 'center' }}>
          Menu
        </div>
      </Row>

      <Row className='mt-4'>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Option 1</Card.Title>
              <Card.Text>
                Description
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Option 2</Card.Title>
              <Card.Text>
                Description
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>

          <Card>
            <Card.Body>
              <Card.Title>Option 3</Card.Title>
              <Card.Text>
                Description
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='mt-4'>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Option 4</Card.Title>
              <Card.Text>
                Description
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>

          <Card>
            <Card.Body>
              <Card.Title>Option 5</Card.Title>
              <Card.Text>
                Description
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>

          <Card>
            <Card.Body>
              <Card.Title>Option 6</Card.Title>
              <Card.Text>
                Description
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Menu;