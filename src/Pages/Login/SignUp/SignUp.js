import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useSignInWithTwitter } from 'react-firebase-hooks/auth';
import auth from '../../../firebse.init'
import { FiTwitter } from "react-icons/fi";
import { AiOutlineGoogle } from "react-icons/ai";

const SignUp = () => {
    const navigate = useNavigate();
    const [signInWithTwitter, twUser] = useSignInWithTwitter(auth);
    const [agree, setAgree] = useState(false);
    const [signInWithGoogle, Googleuser, loading, error] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword, user
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    if (user || twUser || Googleuser) {
        navigate('/')
    }

    const handleEmail = event => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handlePassword = event => {
        const RegexPass = /.{6,}/;
        const validPass = RegexPass.test(event.target.value);
        if (validPass) {
            setUserInfo({ ...userInfo, password: event.target.value })
        }
        else {
            setErrors({ ...errors, password: "Give StrongPassword" })
        }
    }

    const handleConfirmPass = event => {
        setUserInfo({ ...userInfo, confirmPass: event.target.value })
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        if (userInfo.password !== userInfo.confirmPass) {
            setErrors({ ...errors, confirmPass: "Password Not Matched" })
            return;
        }
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)

        console.log(user);

    }
    const HandlesignInWithTwitter = () => {
        signInWithTwitter();

    }
    const handleSignInWithGoogle =()=>{
        signInWithGoogle();
    }
    return (

        <Row md={3} className="g-0 ">
            
            <Col xs={12} md={6} className="mx-auto">
                <div>
                    <div className='container  mx-auto my-5 bg-light border border-1 rounded p-5'>

                        <Form onSubmit={handleFormSubmit} >
                            <h1>Sign Up</h1>
                            <img className='ms-4 mb-3' width={230} src="" alt="" />
                            <Form.Group className=" mb-2">
                                <Form.Label >Name</Form.Label>
                                <Form.Control className='border-0 bg-info p-2 text-dark bg-opacity-10' type="text" placeholder="Name" />

                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control onChange={handleEmail} className='border-0 bg-info p-2 text-dark bg-opacity-10' type="email" placeholder="Email" required />
                                {errors?.email && <p>{errors.email}</p>}
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onBlur={handlePassword} className='border-0 bg-info p-2 text-dark bg-opacity-10' type="password" placeholder="Password" required />
                                {errors?.password && <p>{errors.password}</p>}
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control onBlur={handleConfirmPass} className='border-0 bg-info p-2 text-dark bg-opacity-10' type="password" placeholder="Confirm Password" required />
                                {errors?.confirmPass && <p>{errors.confirmPass}</p>}
                            </Form.Group>
                            <input onClick={() => setAgree(!agree)} type="checkbox" />
                            <label className={`${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept all terms and condition</label>
                            <Button disabled={!agree} className='d-block mx-auto w-50 mt-3' variant="primary" type="submit">
                                Sign Up
                            </Button>
                            <Button onClick={HandlesignInWithTwitter} className='d-block mx-auto w-50 my-3 ' variant="info" type="submit">
                                <FiTwitter /><span className='ms-2'>Sign In with twitter</span>
                            </Button>
                            <Button onClick={handleSignInWithGoogle} className='d-block mx-auto w-50 mb-3 bg-danger bg-opacity-75 text-light' variant="info" type="submit">
                                <AiOutlineGoogle /><span className='ms-2'>Sign In with Google</span>
                            </Button>
                            <p>Already have an account?<Link className='text-decoration-none fw-bold text-dark ms-2' to='/login'>Login</Link></p>

                        </Form>
                    </div>
                </div>
            </Col>
            
        </Row>



    );
};

export default SignUp;