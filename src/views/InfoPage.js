import React from "react";

import Navbar from "components/Navbars/IndexNavbar.js";
import InfoHeader from "components/Headers/InfoHeader.js";
import Footer from "components/Footers/Footer.js";

function InfoPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("info-page");
    return function cleanup() {
      document.body.classList.remove("info-page");
    };
  });
  return (
    <>
      <Navbar />
      <InfoHeader />
      <Footer />
    </>
  );
}

export default InfoPage;
