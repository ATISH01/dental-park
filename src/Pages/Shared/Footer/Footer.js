import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'
import logo from '../../../img/footerLogo.png'
import { HiClock } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { FiFacebook,FiTwitter,FiInstagram } from "react-icons/fi";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center py-5 footer'>
            <Row className='g-0'>
                <Col xs={12} md={4} >
                    <div className='d-flex align-items-center justify-content-center'>
                        <img width={50} src={logo} alt="" />
                        <strong className='text-light fs-5'>Dental Park</strong>
                    </div>
                    <div className='text-light mt-4'>
                        <strong>Dr. Sajib</strong>
                        <p>BDS from Dhaka University</p>
                        <p>Phone:84746474</p>
                    </div>
                </Col>
                <Col xs={12} md={4} className="text-light mt-3">
                    <strong className='fs-5'>Visiting Hours</strong> <br />
                    <div className='mt-2'>
                        <span className='me-3'>Sunday - Thursday</span>
                        <span className='ms-3'><HiClock />5 pm - 10 pm</span> <br />
                        <span className='me-2'>Friday - Saturday</span>
                        <span className='ms-3 ps-3'><HiClock />10 am - 1 pm</span>
                    </div>
                </Col>
                <Col xs={12} md={4} className="text-light mt-2">
                    <Link className='text-decoration-none text-light' to="/about">About Us</Link>
                    <div>
                        <p>Connect With</p>
                        <span><FiFacebook/> facebook</span> <br />
                        <span><FiTwitter/> twitter</span> <br />
                        <span><FiInstagram/> Instagram</span>
                    </div>
                </Col>
            </Row>
            <p className='text-light my-3'><small>Copyright @ {year} </small></p>
            {/* <p>Dental Park</p>
            <p>Dr. Sajib</p>
            <p>Phone:+880161718191</p>
            <p><p><small>copyright @ {year} </small></p></p> */}
        </div>
    );
};

export default Footer;