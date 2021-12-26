import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCredentialsContext } from '../contexts/current-user-context';

const FormWrapper = styled.div`
  /* border: solid;
  border-width: 1px; */
  width: 50%;
  padding: 0;
`

const Login = () => {

  const { setUsername, setPassword } = useCredentialsContext()

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(e.target[0].value);
    setPassword(e.target[1].value);
    navigate('/menu')
  }

  return (
    <Container>
      <Row>
        <div style={{ textAlign: 'center' }}>
          Login
        </div>
      </Row>
      <Row className='justify-content-center'>
        <FormWrapper>
          <Form className='bg-light p-3 m-0' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </FormWrapper>
      </Row>
    </Container>
  )
}

export default Login;