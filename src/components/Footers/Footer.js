import React from "react";

import SimpleForm from "../ChatBot/SimpleForm"


function Footer() {
  return (
    
    <footer className="footer footer-black footer-dark">
      <span className="copyright">
        © {new Date().getFullYear()}, made with{" "}
        <i className="fa fa-heart heart" /> by Creative Mag and Gregory and Charles.
      </span>
      <>
      <SimpleForm />
      </>
    </footer>
  );
}

export default Footer;