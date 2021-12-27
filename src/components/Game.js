import React, { useState, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { useCredentialsContext } from '../contexts/current-user-context';

const Game = () => {
  const { username, password } = useCredentialsContext();

  const [counter, setCounter] = useState(60);
  const [stopped, setStopped] = useState(false)

  useEffect(() => {
    let timer = counter > 0 && !stopped && setInterval(() => setCounter(counter - 1), 1000);
    return () => {
      clearInterval(timer)
    }
  }, [counter, stopped])

  return (
    // <div style={{ width: '50%' }}>
    <Container>
      <Row>
        <div style={{ textAlign: 'center' }}>
          Time: {counter}
        </div>
      </Row>
      <Row className='justify-content-center'>
        <Button style={{ width: 100 }} onClick={() => setStopped(false)}>
          Start
        </Button>
      </Row>
      <Row className='justify-content-center'>
        <Button style={{ width: 100 }} onClick={() => setStopped(true)}>
          Stop
        </Button>
      </Row>
    </Container>
    // </div>
  )
}

export default Game;