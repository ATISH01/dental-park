import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebse.init';
import img from '../../../img/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const signingOut = ()=>{
        signOut(auth)
    }
    return (
        <div>
            <Navbar className='bg-opacity-25' collapseOnSelect expand="lg" bg="info" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <div className='d-flex align-items-center'>
                            <div><img className='mb-1 me-2' width={40} src={img} alt="" /></div>
                            <div className='fs-4 pt-1'><p><span className='fw-bold'>Dental</span>Park</p></div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='ms-auto fw-bold'>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            {
                                user ? <button className='btn btn-link text-decoration-none' onClick={signingOut}>SignOut</button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            <Nav.Link as={Link} to="/checkout">CheckOut</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;