import React from "react";

import Contact from '../components/Contact/Contact.js';

// core components
import Navbar from "components/Navbars/IndexNavbar.js";
import SimpleForm from "../components/ChatBot/SimpleForm"

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
        <Contact />
        <SimpleForm />
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