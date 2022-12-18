import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaShareSquare, FaBookmark, FaStar, FaEye } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import { Button, Image } from 'react-bootstrap';

const News = () => {
    const news = useLoaderData();
    const { title, thumbnail_url, _id, details, image_url, category_id, rating, author, total_view } = news;
    const { img, name, published_date } = author;
    return (
        <>
            <Card className='my-4'>
                <Card.Body>
                    <Card.Title className='fw-bold'>{title}</Card.Title>
                    <div className='d-flex my-4'><img className='w-75 mx-auto' src={image_url} alt="" /></div>
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
                    <Card.Text>
                        <p>{details}</p>
                    </Card.Text>
                </Card.Body>

            </Card>
        </>
    );
};

export default News;