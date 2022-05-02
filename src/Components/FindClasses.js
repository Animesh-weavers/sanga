import React, { useContext } from 'react';
import AuthContext from '../Auth/auth-context';
import { useNavigate, Link, Outlet } from 'react-router-dom';
import { Navbar,Nav,Container } from 'react-bootstrap';

const FindClasses = () => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const freeTrialClickHandler = () => {
    if (authCtx.isLoggedIn) {
      navigate({ pathname: '/joinasteacher' }, { replace: false });
    } else {
      navigate({ pathname: '/login' }, { replace: false });
    }
  }
  return (
    <>
      <div style={{ width: '100%', height: '65vh', background: 'grey', textAlign: 'center' }}>
        <h1>Unleash their</h1>
        <h1>Creativity</h1>
        <br />
        <h3>Live Classes for kids 4 - 10 year.</h3>
        <h3>Arts,Dance,Yoga,Singing,Drama,Spanish,Hindi and more...</h3>
        <button onClick={freeTrialClickHandler} style={{ border: 'none', backgroundColor: '#2C989E', color: 'white' }}>Start Free Trial</button>
      </div>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>All</Nav.Link>
              <Nav.Link as={Link} to='arts'>Arts</Nav.Link>
              <Nav.Link as={Link} to='/dance'>Dance</Nav.Link>
              <Nav.Link as={Link} to='/yoga'>Yoga</Nav.Link>
              <Nav.Link as={Link} to='/music'>Music</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Outlet />
      </div>
    </>
  )
}

export default FindClasses