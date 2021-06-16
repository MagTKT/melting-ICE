import React from "react";

import Contact from 'components/Contact/Contact.js';

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

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
        </div>
        <Footer />
    </>
  );
}

export default ContactPage;