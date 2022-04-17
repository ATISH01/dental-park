import React from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap';
import image from '../../../img/userExp.png'

const UserExperience = () => {

    return (
        <div className='container'>
            <Row xs={1} md={2} className="p-2">
                <Col className='p-3'>
                    <img className='rounded' width={350} src={image} alt="" />
                </Col>
                <Col className='p-3'>
                    <h4 className='mb-5'>An Attractive Smile Makes a Lasting Impression</h4>
                    <p> “My dentist is actually a highly technical specialist, constantly experimenting with the latest dental research. The equipment he has makes my old dentist look prehistoric.”</p>
                    <div className='my-5'>
                        <h6>User Experience</h6>
                        <p><ProgressBar animated now={45} /></p>
                    </div>
                    <div className='my-5'>
                        <h6>Sucess Rate</h6>
                        <p><ProgressBar animated now={99} /></p>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default UserExperience;