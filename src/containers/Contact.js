import { useEffect, useState } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import house from '../photos/house.jpg';
import Button from '@material-ui/core/Button';

import { Icon } from 'semantic-ui-react'

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return (
        <div className="gallery-master-container">
            <div></div>

            <div className="contact-container">
                <img src={house} className="img-background"></img>
                <div className="info-div">

                    <p></p>


                    <h3>INFO@CANEDOBUILDERS.COM</h3>
                    <h3>(512)-888-4112</h3>
                </div>
                <div className="form-div">
                    <h2>Warranty Request Form</h2>
                    <p>Please fill out the form below for warranty related issues.  </p>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{<Icon name='angle right' size='large' />} Name </Form.Label>
                            <Form.Control type="name" placeholder="..." />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{<Icon name='envelope outline' size='large' />} Email </Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{<Icon name='phone volume' size='large' />} Phone Number </Form.Label>
                            <Form.Control type="number" placeholder="..." />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>{<Icon name='certificate' size='large' />} Issue </Form.Label>
                            <Form.Control type="email" placeholder="..." />
                        </Form.Group>
                        <Form.Group className="mb-3"
                            controlId="exampleForm.ControlTextarea1">
                            <Form.Label>{<Icon name='pencil alternate' size='large' />} Details</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="..." />
                        </Form.Group>
                        <a href="mailto:info@canedobuilders.com?subject=Subject&body=Body">
                            <Button variant="contained" color="primary">

                                {<Icon name='paper plane' size='large' />}
                            </Button>
                        </a>
                    </Form>
                </div>
            </div>
        </div >

    );
}

export default Contact;