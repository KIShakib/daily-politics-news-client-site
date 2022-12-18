import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaTwitch, FaLinkedin, FaRuler, FaSignInAlt, FaSign } from "react-icons/fa";
import brandImage1 from "../../../assests/images/Brand1.png";
import brandImage2 from "../../../assests/images/Brand2.png";
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const RightSideNav = () => {

    const { user, signInWithGoogle, signInWithGitHub, signInWithFacebook, logOut } = useContext(AuthContext);

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                toast.success("Sign In With Google Successfully");
            })
            .catch(err => toast.error(err.message.slice(10)))
    }
    const handleSignInWithGitHub = () => {
        signInWithGitHub()
            .then(result => {
                toast.success("Sign In With GitHub Successfully");
            })
            .catch(err => toast.error(err.message.slice(10)))
    }
    const handleSignInWithFacebook = () => {
        signInWithFacebook()
            .then(result => {
                toast.success("Sign In With Facebook Successfully");
            })
            .catch(err => toast.error(err.message.slice(10)))
    }


    const handleSignOut = () => {
        logOut()
            .then(result => {
                toast.success("Sign Out Successfully");
            })
            .catch(err => toast.error(err.message.slice(10)))
    }

    return (
        <div>
            {
                user?.uid
                    ?
                    <Button onClick={handleSignOut} className='mb-2 px-5 w-100' variant="outline-danger">Sign Out</Button>
                    :
                    <ButtonGroup vertical>
                        <Button onClick={handleSignInWithGoogle} className='mb-2 px-5' variant="outline-primary"><span><FaGoogle></FaGoogle></span> Login With Google</Button>
                        <Button onClick={handleSignInWithGitHub} className='mb-2 px-5' variant="outline-dark"><span><FaGithub></FaGithub></span> Login With GitHub</Button>
                        <Button onClick={handleSignInWithFacebook} className='mb-2 px-5' variant="outline-primary"><span><FaFacebook></FaFacebook></span> Login With Facebook</Button>
                        <Button className='mb-2 px-5' variant="outline-success"><span><FaSignInAlt></FaSignInAlt></span>
                            <Link to="/login" className='text-decoration-none text-success ms-1'>Login</Link>
                        </Button>
                        <Button className='mb-2 px-5' variant="outline-danger"><span><FaSign></FaSign></span>
                            <Link to="/signup" className='text-decoration-none text-danger ms-1'>Sign Up</Link>
                        </Button>
                    </ButtonGroup>
            }
            <div>
                <h6 className='mt-3'>Find Us On...</h6>

                <ListGroup as="ol" numbered>
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
            </div>

            <div className='mt-4'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={brandImage1}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={brandImage2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default RightSideNav;