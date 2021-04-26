import React from "react";

import { Row, Container } from "reactstrap";


function Footer() {
  return (
    <footer className="footer footer-black footer-dark">
      <Container>
        <Row>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Mag and Gregory and Charles.
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;