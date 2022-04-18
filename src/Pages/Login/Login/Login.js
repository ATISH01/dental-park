import React, { useRef  } from 'react';
import { Button, Form } from 'react-bootstrap';
import {  useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebse.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    let seterror;
    if(error){
        seterror = <p>Email or Password not matched</p>
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
    const handleReset =async()=>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('Reset link send')
    }
    return (
        <div className='container w-50 mx-auto my-5 bg-light  border border-1 rounded p-5'>

            <Form  onSubmit={handleLoginForm}>
                <h1>Login</h1>
                <img className='ms-4 mb-5' width={230} src="" alt="" />
                
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} className='border-0 bg-info p-2 text-dark bg-opacity-10' type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} className='border-0 bg-info p-2 text-dark bg-opacity-10' type="password" placeholder="Password" />
                </Form.Group>
                
                <p>{seterror}</p>

                <Button className='w-100 mb-3' variant="primary" type="submit">
                    Login
                </Button>
                <p>New to DentalPark?<Link to='/signup' className='text-decoration-none fw-bold text-dark ms-2' onClick={navigateSignUp} >SignUp</Link></p>
                <p>ForgetPassword? <button  onClick={handleReset} className='btn btn-link text-decoration-none'><span className='fw-bold text-dark'>Reset</span></button></p>
                <ToastContainer />
            </Form>
        </div>
    );
};

export default Login;