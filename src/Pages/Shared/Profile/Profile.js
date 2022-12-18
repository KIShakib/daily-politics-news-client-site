import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <>
            {
                user?.uid
                    ?
                    <Card style={{ width: "70%" }} className="mx-auto p-4">
                        <Card.Img variant="top" className='mx-auto' style={{ width: "400px" }} src={user?.photoURL} />
                        <Card.Body className=' d-flex flex-column justify-content-center'>
                            <Card.Title className='text-center text-success fw-bold'>{user?.displayName}</Card.Title>
                            <Card.Text className='text-center'>
                                {user?.email}
                            </Card.Text>
                            <Button variant="success" className='fw-bold'>Edit Profile</Button>
                        </Card.Body>
                    </Card>

                    :
                    <div className='w-50 mx-auto mt-5'>
                        <h3 className='text-danger text-center fw-bold mb-5'>Your Are Not Logged In</h3>
                        <Button variant="danger" className='fw-bold text-center w-100'><Link to="/login" className='text-decoration-none text-white'>Please Login</Link></Button>
                    </div>
            }
        </>
    );
};

export default Profile;