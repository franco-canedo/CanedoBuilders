import { useEffect, useState } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import house from '../photos/house.jpg';
import Button from '@material-ui/core/Button';

import { Icon } from 'semantic-ui-react'

import { send } from 'emailjs-com';

function Contact() {

    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // })

    const [toSend, setToSend] = useState({
        name: '',
        email: '',
        phone: '',
        issue: '',
        message: '',
        
    });

    const onSubmit = (e) => {
        e.preventDefault();
        {/* --- METHOD TO SEND THE MAIL --- */ }
        send(
            'service_i7ro6hy',
            'template_04eauw7',
            toSend,
            'user_aGuGt3m2XlA0hZ450LDxM',
          )
            .then((response) => {
              alert('Request sent.', response.status, response.text);
              console.log('Request sent.', response.status, response.text);
            })
            .catch((err) => {
              alert('There was an error... Please try again.', err);
              console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };




    return (
        <div className="gallery-master-container">
            <div></div>

            <div className="contact-container">
                <img src={house} className="img-background"></img>
                <div className="info-div">
                    
                    <h3>INFO@CANEDOBUILDERS.COM</h3>
                    <h3>(512)-888-4112</h3>

                </div>
                <div className="form-div">
                    <h2>Warranty Request Form</h2>
                    <p>Please fill out the form below for warranty related issues. All fields are required. </p>
                    <Form onSubmit={onSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{<Icon name='angle right' size='large' />} Name * </Form.Label>
                            <Form.Control type='text'
                                name='name'
                                placeholder='...'
                                value={toSend.name}
                                onChange={handleChange} />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{<Icon name='envelope outline' size='large' />} Email * </Form.Label>
                            <Form.Control type="email" name='email' placeholder="name@example.com" value={toSend.email}
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{<Icon name='phone volume' size='large' />} Phone Number * </Form.Label>
                            <Form.Control type="text" name='phone' placeholder="..." value={toSend.phone}
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{<Icon name='certificate' size='large' />} Home Address * </Form.Label>
                            <Form.Control type="text" name='issue' placeholder="..." value={toSend.issue}
                                onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>{<Icon name='pencil alternate' size='large' />} Details *</Form.Label>
                            <Form.Control as="textarea" rows={3} name='message' placeholder="..." value={toSend.message}
                                onChange={handleChange} />
                        </Form.Group>

                        <Button variant="contained" color="primary" type='submit'>
                            {<Icon name='paper plane' size='large' />}
                        </Button>
                    </Form>
                </div>
            </div>
        </div >

    );
}

export default Contact;