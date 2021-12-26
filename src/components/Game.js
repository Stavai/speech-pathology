import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Countdown from 'react-countdown';
import { useCredentialsContext } from '../contexts/current-user-context';

const Game = () => {
  const { username, password } = useCredentialsContext();

  console.log({ username, password });

  return (
    <Container>
      <Row>
        <div style={{ textAlign: 'center' }}>
          <Countdown date={Date.now() + 10000} />
        </div>
      </Row>
    </Container>
  )
}

export default Game;