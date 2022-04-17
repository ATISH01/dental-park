import React, {useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [agree, setAgree] = useState(false);
    
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
       
        
    }
    return (
        <div className='container'>

            <Form onSubmit={handleFormSubmit} className='w-50 mx-auto mt-5'>
                <h1>Sign Up</h1>
                <img className='ms-4 mb-3' width={230} src="" alt="" />
                <Form.Group className="mb-2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='border-0 bg-success p-2 text-dark bg-opacity-10' type="text" placeholder="Name" />

                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmail} className='border-0 bg-success p-2 text-dark bg-opacity-10' type="email" placeholder="Email" />
                    {errors?.email && <p>{errors.email}</p>}
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} className='border-0 bg-success p-2 text-dark bg-opacity-10' type="password" placeholder="Password" />
                    {errors?.password && <p>{errors.password}</p>}
                </Form.Group>
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPass} className='border-0 bg-success p-2 text-dark bg-opacity-10' type="password" placeholder="Confirm Password" />
                    {errors?.confirmPass && <p>{errors.confirmPass}</p>}
                </Form.Group>
                <input onClick={() => setAgree(!agree)} type="checkbox" />

                <Button disabled={!agree} className='w-100 my-3' variant="primary" type="submit">
                    Sign Up
                </Button>
                <p>Already have an account?<Link to='/login'>Login</Link></p>

            </Form>
        </div>
    );
};

export default SignUp;