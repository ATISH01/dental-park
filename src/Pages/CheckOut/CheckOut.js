import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function CheckOut() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    alert("Thank You")
  };

  return (
    <div className="w-50 mx-auto my-5 bg-info bg-opacity-25 border border-1 rounded p-5">
      <h4>Provide Information to Checkout</h4>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="my-4" controlId="text">
          <Form.Label>Name</Form.Label>
          <Form.Control {...register("firstName")} type="text" placeholder="Enter Name" />
          <select  className="mt-2 border border-1 rounded" {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
            <input {...register("gender")} />
          </select>
          
        </Form.Group>
        <Form.Group>
        <Form.Label>Email address</Form.Label>
          <Form.Control {...register("email")} type="email" placeholder="Enter"/>
        </Form.Group>
        <Form.Group className="my-4" controlId="text">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control {...register("Phone")} type="text" placeholder="Phone NUmber" />
        </Form.Group>
        <Form.Group className="my-4" controlId="text">
          <Form.Label>Address Details:</Form.Label>
          <Form.Control {...register("address")} type="text" placeholder="Address" />
        </Form.Group>
        <p className="d-inline">When You Want your apointment:</p>
        <select className="mt-2 border border-1 rounded" {...register("aponiment")}>
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednessday">Wednessday</option>
            <input {...register("aponiment")} />
          </select>
        
        <Button className="d-block my-3 " variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}