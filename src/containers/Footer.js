import React from 'react';
import './Footer.css';
import Button from 'react-bootstrap/Button';
import logo from '../photos/Logo.jpg'
import logoZoom from '../photos/LogoZoom2.png';
import { Icon } from 'semantic-ui-react';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>                
                    <img src={logoZoom} className="footer-logo"></img>               
            </section>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='social-icons'>
                        <a target="_blank"
                            class='social-icon-link facebook'
                            aria-label='LinkedIn'
                            href="https://www.linkedin.com/company/79652504/admin/">
                            <i class='fab fa-linkedin' />
                        </a>
                        <a target="_blank"
                            class='social-icon-link facebook'
                            aria-label='Instagram'
                            href="https://www.instagram.com/canedobuilders/">
                            <i class='fab fa-instagram' />
                        </a>
                        <a target="_blank"
                            class='social-icon-link facebook'
                            aria-label='Facebook'
                            href="https://www.facebook.com/guido.canedo">
                            <i class='fab fa-facebook' />
                        </a>

                    </div>
                </div>
            </section>
            <section className='author'>
                <p className="designed-by">Website by Franco C.
                    <a className="author-a-tag"
                    target="_blank"
                    href="https://franco-canedo.herokuapp.com/"> {<Icon name='external alternate' size='small' />} </a></p>
            </section>
        </div>
    );
}

export default Footer;