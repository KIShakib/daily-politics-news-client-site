import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaShareSquare, FaBookmark, FaStar, FaEye } from "react-icons/fa";
import Image from 'react-bootstrap/Image'
const NewsCard = ({ news }) => {
    const { title, thumbnail_url, _id, details, image_url, category_id, rating, author, total_view } = news;
    const { img, name, published_date } = author;
    return (
        <Card className='my-4'>
            <Card.Header>
                <div className='d-flex justify-content-between px-2 align-items-center'>
                    <div className='d-flex align-items-center gap-2'>
                        <div>
                            <Image roundedCircle style={{ height: "40px" }} src={img}></Image>
                        </div>
                        <div>
                            <p className='m-0 p-0 fw-bold'>{name}</p>
                            <p className='m-0 p-0'><small>{published_date}</small></p>
                        </div>
                    </div>
                    <div className='d-flex gap-2'>
                        <FaShareSquare className='text-danger'></FaShareSquare>
                        <FaBookmark className='text-primary'></FaBookmark>
                    </div>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title className='fw-bold'>{title}</Card.Title>
                <div className='d-flex my-4'><img className='w-75 mx-auto' src={image_url} alt="" /></div>
                <Card.Text>
                    {details.length > 320
                        ? <p>{details.slice(0, 320) + " ..."} <Link className='text-decoration-none' to={`/news/${_id}`}>Read More</Link></p>
                        : <p>{details}</p>
                    }
                </Card.Text>
                <Button variant="primary"><Link to={`/news/${_id}`} className='text-decoration-none text-white'>Details</Link></Button>
            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between px-5">
                <div className='d-flex align-items-center'>
                    <FaStar className='text-warning'></FaStar>
                    <span className='fw-bold'>{rating.number}</span>
                </div>
                <div className='d-flex align-items-center'>
                    <FaEye className='text-warning'></FaEye>
                    <span className='fw-bold'>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;