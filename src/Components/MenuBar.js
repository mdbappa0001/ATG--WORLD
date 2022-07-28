import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCaretDown ,FaSistrix} from "react-icons/fa";
import logo from "../images/logo.png";
import "./MenuBar.css";

const MenuBar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo_img" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <div className='search_input position-relative'>
                                <input type="text" placeholder='Search for your favorite groups in ATG' />
                                <FaSistrix className='position-absolute top-50 start-0 translate-middle ms-4' />
                            </div>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes" className='menu-text'>
                                <p>Create Account. <span>It's free!</span>&nbsp;<FaCaretDown style={{
                                    color: "#2E2E2E"
                                }} /></p>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default MenuBar;