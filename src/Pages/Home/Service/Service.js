import React from 'react';
import { Button, Card, Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {serviceName, img} = service;
    const navigate=useNavigate()
    const handleButton =()=>{
        navigate("/checkout ")
    }
    return (
        <div className='col-md-4 mt-2 '>
            <Card className='w-75 mt-4 mx-auto border-0 g-0 bg-white rounded hover-card'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{serviceName}</Card.Title>
                    <Spinner animation="grow" size="sm" variant="success" />
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur!
                    </Card.Text>
                    <Button className='mx-auto d-block' onClick={handleButton} variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;