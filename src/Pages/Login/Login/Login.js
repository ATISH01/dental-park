import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebse.init';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
   
    if(user){
        navigate("/")
    }
    const navigateSignUp =()=>{
        navigate("/signup") 
    }
    
    const handleLoginForm = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password =passwordRef.current.value
        signInWithEmailAndPassword(email,password);
    }
    return (
        <div className='container'>

            <Form  onSubmit={handleLoginForm} className='w-25 mx-auto mt-5'>
                <h1>Login</h1>
                <img className='ms-4 mb-5' width={230} src="" alt="" />

                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} className='border-0 bg-success p-2 text-dark bg-opacity-10' type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} className='border-0 bg-success p-2 text-dark bg-opacity-10' type="password" placeholder="Password" />
                </Form.Group>
                <p>{error?.message}</p>

                <Button className='w-100 mb-3' variant="primary" type="submit">
                    Login
                </Button>
                <p>New to DentalPark?<Link to='/signup' onClick={navigateSignUp} >SignUp</Link></p>
                <p>ForgetPassword?<Link to='/registration'  >Reset</Link></p>
            </Form>
        </div>
    );
};

export default Login;