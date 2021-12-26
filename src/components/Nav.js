import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item className='p-3' as="li">
          <Link to='login'>Login</Link>
        </Nav.Item>
        <Nav.Item className='p-3' as="li">
          <Link to='menu'>Menu</Link>
        </Nav.Item>
        <Nav.Item className='p-3' as="li">
          <Link to='game'>Game</Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Navigation;