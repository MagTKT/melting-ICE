import React from "react";

// core components
import Navbar from "components/Navbars/IndexNavbar.js";
import GameHeader from "components/Headers/GameHeader.js";
import Footer from "components/Footers/Footer.js";
import SimpleForm from "../components/ChatBot/SimpleForm"

function GamePage() {
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
      <GameHeader />
      <div className="main">
      </div>
      <SimpleForm />
      <Footer />
    </>
  );
}

export default GamePage;