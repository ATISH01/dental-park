import React, { useRef  } from 'react';
import { Button, Form } from 'react-bootstrap';
import {  useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
      const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth,{sendPasswordResetEmail:true});
     
   const location = useLocation();
   const from = location?.state?.from.pathname || '/';
    if(user){
        navigate(from,{replace:true})
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
    const handleReset =()=>{
        sendPasswordResetEmail();
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
                <p>ForgetPassword? <button onClick={handleReset} className='btn btn-link'>Reset</button></p>
            </Form>
        </div>
    );
};

export default Login;