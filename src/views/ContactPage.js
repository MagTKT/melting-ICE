import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import Navbar from "components/Navbars/IndexNavbar.js";

function ContactPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    return function cleanup() {
      document.body.classList.remove("contact-page");
    };
  });
  return (
    <>
      <Navbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/iceland.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Contact</h3>
                <Form className="register-form">
                  <label>Nom</label>
                  <Input placeholder="Nom" type="nom" />
                  <label>Prénom</label>
                  <Input placeholder="Prénom" type="prénom" />
                  <label>Adresse</label>
                  <Input placeholder="Adresse" type="adresse" />
                  <label>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label>Message</label>
                  <Input placeholder="Message" type="textarea" />
                  <Button block className="btn-round" color="info">
                    Envoyer
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" /> by Creative Mag and Gregory and Charles
          </h6>
        </div>
      </div>
    </>
  );
}

export default ContactPage;