import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, Button, Form, FormControl } from 'react-bootstrap'
import AuthContext from '../Auth/auth-context';
const NavigationBar = () => {
    const authCtx = useContext(AuthContext);
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to='/'>SANGA</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to='/'>Find Classes</Nav.Link>
                        <Nav.Link as={Link} to='/joinasteacher'>Join as a teacher</Nav.Link>
                        {!authCtx.isLoggedIn && <Nav.Link style={{ background: '#FBDE59', borderRadius: '10px', paddingRight: '2rem', paddingLeft: '2rem', color: 'black', fontWeight: 'bold' }} as={Link} to='/login'>Login</Nav.Link>}
                        {authCtx.isLoggedIn && <Nav.Link style={{ background: '#FBDE59', borderRadius: '10px', paddingRight: '2rem', paddingLeft: '2rem', color: 'black', fontWeight: 'bold' }} onClick={()=>authCtx.logout()}>Logout</Nav.Link>}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar