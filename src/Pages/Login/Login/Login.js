import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const navigateSignUp =()=>{
        navigate("/signup")
    }
    return (
        <div className='container'>

            <Form className='w-25 mx-auto mt-5'>
                <h1>Login</h1>
                <img className='ms-4 mb-5' width={230} src="" alt="" />

                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='border-0 bg-success p-2 text-dark bg-opacity-10' type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className='border-0 bg-success p-2 text-dark bg-opacity-10' type="password" placeholder="Password" />
                </Form.Group>


                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button>
                <p>New to DentalPark?<Link to='/signup' onClick={navigateSignUp} >SignUp</Link></p>
                <p>ForgetPassword?<Link to='/registration'  >Reset</Link></p>
            </Form>
        </div>
    );
};

export default Login;