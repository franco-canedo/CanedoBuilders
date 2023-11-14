import { useEffect, useState } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import house from '../photos/house.jpg';
import Button from '@material-ui/core/Button';

import { Icon } from 'semantic-ui-react'

import { send } from 'emailjs-com';

import green from '../gifs/green.png';
import home from '../BFS/custom_homes.png';
import project from '../BFS/project_management.png';
import remodel from '../BFS/remodeling.png';

function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

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
            <div className='services-container'>

                <div className='title-div'>
                    <h1>BUILDING SERVICES</h1>
                </div>
                <div>
                    <h3>WE CATER TO YOUR NEEDS</h3>
                </div>

                <div className='services-divs'>
                    <div className='paragraph-divs'>
                        <p>
                            Over the years we have developed an impressive network of local architects, designers, and contractors. This network allows us to cater specifically to your needs, our process is extremely efficient and we aim to exceed expectations with the results.

                            We pride ourselves in open communication and transparency, this is key to ensure our client’s vision is brought to life correctly. As a small business, we limit the amount of projects we take at a time and this is to our clients benefit.
                        </p>
                    </div>
                    <div className="p-pic-div">
                        <img className="services-pic" src={green}></img>
                    </div>
                </div>

                <div className='services-divs'>
                    <div className="p-pic-div">
                        <img className="services-pic" src={home}></img>
                    </div>
                    <div className='paragraph-divs'>
                        <p>
                            We build your dream house on your lot. Our approach with custom homes is to give you
                            total control to design and create your vision. We use our knowledge and expertise to guide
                            you through the whole design and construction process, open communication is key. Schedule
                            a consultation with us to start planning your dream project.
                        </p>
                    </div>
                </div>

                <div className='services-divs'>
                    <div className='paragraph-divs'>
                        <p>
                            Small bathroom remodel, addition, or full home renovation, we got you covered. Schedule a consultation
                            with us to start reinventing your current home and help it reach its full potential.
                        </p>
                    </div>
                    <div className="p-pic-div">
                        <img className="services-pic" src={remodel}></img>
                    </div>
                </div>

                <div className='services-divs'>
                    <div className="p-pic-div">
                        <img className="services-pic" src={project}></img>
                    </div>
                    <div className='paragraph-divs'>
                        <p>
                            We offer full construction management services for real estate professionals or investors looking to add value to their properties.
                            In this business it is essential to ensure proper supervision, budgeting, and scheduling to be successful. Our commitment
                            to continuous improvement has been the driving factor for our extremely efficient process. We carefully monitor all aspects of
                        </p>
                    </div>
                </div>
            </div>



            <div className="contact-container">
                <img src={house} className="img-background"></img>
                <div className="info-div">
                    
                    <h3>INFO@CANEDOBUILDERS.COM</h3>
                    <h3>(512)-888-4112</h3>

                </div>
                <div className="form-div">
                    <h2>Warranty Support Form</h2>
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