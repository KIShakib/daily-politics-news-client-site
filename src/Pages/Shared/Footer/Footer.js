import React from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaTwitch, FaLinkedin, FaRuler, FaCopyright } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="mt-3 footer-div rounded">
            <div>
                <h5 className="text-center fw-bolder">The Daily Emporium</h5>
                <p className="text-center"> <FaCopyright></FaCopyright> Copyright The Daily Emporium Media Wing</p>
                <div>

                </div>
            </div>
            <h6 className='mt-3 text-black text-center'>About Us...</h6>
            <ListGroup className='w-50 mx-auto' as="ol" numbered>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Facebook</div>
                    </div>
                    <Badge bg="primary" pill>
                        <FaFacebook></FaFacebook>
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Instagram</div>
                    </div>
                    <Badge bg="danger" pill>
                        <FaInstagram></FaInstagram>
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Twitter</div>
                    </div>
                    <Badge bg="primary" pill>
                        <FaTwitter></FaTwitter>
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Twitch</div>
                    </div>
                    <Badge bg="success" pill>
                        <FaTwitch></FaTwitch>
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Linkedin</div>
                    </div>
                    <Badge bg="primary" pill>
                        <FaLinkedin></FaLinkedin>
                    </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Terms & Condition</div>
                    </div>
                    <Badge bg="danger" pill>
                        <FaRuler></FaRuler>
                    </Badge>
                </ListGroup.Item>
            </ListGroup>
        </footer>
    );
};

export default Footer;