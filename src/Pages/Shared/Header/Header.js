import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <Navbar className='mb-3' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand><Link to="/" className='text-decoration-none fs-3 fw-bolder'>Daily Politics News</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown className='d-lg-none' title="All News" id="collasible-nav-dropdown">
                            <NavDropdown.Item><LeftSideNav></LeftSideNav></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2}>
                            <Link to="/profile">
                                {
                                    user?.photoURL

                                        ? <Image className='p-1 bg-success' roundedCircle style={{ height: "50px" }} src={user?.photoURL}></Image>

                                        : <FaUser></FaUser>
                                }
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;