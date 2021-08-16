import { useEffect, useState } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import house from '../photos/house.jpg';
import Button from '@material-ui/core/Button';


function Contact() {
    return (
        <div className="gallery-master-container">
            <div></div>
           
            <div className="contact-container">
            <img src={house} className="img-background"></img>
                <div className="info-div">
                    <h1>Canedo Builders</h1>
                    <p></p>
                    <p>1613 S Capital of Texas HWY Ste 224 Austin, TX 78746</p>
                    <p>(512)-373-5885</p>
                    <p>canedoguido65@gmail.com</p>
                </div>
                <div className="form-div">
                    <h3>Send us a Message!</h3>
                    <p></p>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" 
                        controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message:</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="contained" color="primary">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>

    );
}

export default Contact;