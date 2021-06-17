import React from 'react';
import emailjs from 'emailjs-com';

import { Card, Container, Row, Col } from "reactstrap";

export default function Contact() {

function sendEmail(e) {
    e.preventDefault();

emailjs.sendForm('service_1tw2add', 'template_r65ln77', e.target, 'user_RpnSwxblLjlSxKlc92wgR')
    .then((result) => {
        console.log(result.text);
        alert('Votre email à bien été envoyé vous recevrez une réponse sous peu');
    }, (error) => {
        console.log(error.text);
    });
}

    return (
        <Container>
            <Row>
                <Col className="ml-auto mr-auto" lg="4">
                    <Card className="card-register ml-auto mr-auto">
                        <h3 className=" test">Contact</h3>
                        <form className="contact-form" onSubmit={sendEmail}>
                            <div class="display">
                                <label>Nom</label>
                                <input type="name" name="name"/>
                                <label>Email</label>
                                <input type="email" name="email"/>
                                <label>Message</label>
                                <textarea name="message" />
                            <input type="submit" class="btn btn-primary input" value="Send" Alert='Votre email à bien été envoyé vous recevrez une réponse sous peu'/>
                            </div>
                        </form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}