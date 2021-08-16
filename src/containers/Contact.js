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
                    <h1>CANEDO BUILDERS</h1>
                    <p></p>
                    
                    <p>(512)-373-5885</p>
                    <p>INFO@CANEDOBUILDERS.COM</p>
                </div>
                <div className="form-div">
                    <h3>SEND US A MESSAGE</h3>
                    <p></p>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>EMAIL</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" 
                        controlId="exampleForm.ControlTextarea1">
                            <Form.Label>MESSAGE:</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <a href="mailto:info@canedobuilders.com?subject=Subject&body=Body">
                        <Button variant="contained" color="primary">
                        
                            Submit
                        </Button>
                        </a>
                    </Form>
                </div>
            </div>
        </div>

    );
}

export default Contact;