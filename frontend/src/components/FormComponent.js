import { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from './FormContainer';

const FormComponent = () => {
 const [textName, setTextName] = useState('');
 const [textMessage, setTextMessage] = useState('');
 const [phoneNumber, setPhoneNumber] = useState([]);

 const submitHandler = (e) => {
  e.preventDefault();
  const data = [textName, textMessage, phoneNumber];
  console.log(data);
 };

 return (
  <FormContainer>
   <h2>Get in Touch</h2>
   <Form onSubmit={submitHandler}>
    <Form.Group controlId='name'>
     <Form.Label>Name</Form.Label>
     <Form.Control
      type='text'
      placeholder='Enter name'
      value={textName}
      onChange={(e) => setTextName(e.target.value)}></Form.Control>
    </Form.Group>

    <Form.Group controlId='message'>
     <Form.Label>Message</Form.Label>
     <Form.Control
      type='text'
      placeholder='Enter message'
      value={textMessage}
      onChange={(e) => setTextMessage(e.target.value)}></Form.Control>
    </Form.Group>

    <Form.Group controlId='phone'>
     <Form.Label>Phone number</Form.Label>
     <Form.Control
      type='number'
      placeholder='Enter phone number'
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}></Form.Control>
    </Form.Group>

    <Button type='submit' variant='primary'>
     Send
    </Button>
   </Form>
  </FormContainer>
 );
};

export default FormComponent;
