import React from 'react';
import { Col, Row } from 'react-bootstrap';
import me from '../../img/me.jpg'

const AboutMe = () => {
    return (
        <Row md={3} className="g-0">
        
        <Col xs={12} md={6} className="mx-auto">
            <img className='d-block mx-auto mb-4 rounded' src={me} alt="" />
            <p className='border border-2 rounded-2 p-2 mx-auto'>My Name is Atish Barua.I compelete my graduation in CSE. Now I am trying to change my self with hardwork.My goal is to become a full stack web-developer.To fullfill my goal I started learning web development in programming hero.I trying my best to utilize my time.
            </p>
           </Col> 
            
        </Row>
    );
};

export default AboutMe;