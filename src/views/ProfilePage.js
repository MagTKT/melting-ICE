import React from "react";

import {
  Container,
  Row,
  Col,
} from "reactstrap";

import Navbar from "components/Navbars/IndexNavbar.js";
import Header from "components/Headers/ProfilHeader.js";
import Footer from "components/Footers/Footer.js";
import SimpleForm from "../components/ChatBot/SimpleForm"

function ProfilePage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <Navbar />
      <Header />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="name">
              <br />
              <h4 className="title">
              Réchauffement climatique : la fonte des glaces aux pôles est six fois plus rapide qu'il ya 30 ans<br />
              </h4>
              <h6 className="description">Avec le réchauffement climatique, les glaces fondent. Du côté du Groenland et de l'Antarctique, désormais six fois plus vite que dans les années 1990, affirment les chercheurs. Des chiffres malheureusement en phase avec les prévisions du pire des scénarios climatiques envisagés par le Giec.</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
              Améliorer les estimations des quantités de glace présentes du côté des calottes polaires et ainsi mieux comprendre leur impact sur l'élévation du niveau de la mer. C'est l'objectif de l'Imbie (Ice Sheet Mass Balance Intercomparison Exercise). Et aujourd'hui, cette collaboration internationale qui rassemble une petite centaine de chercheurs de quelque 50 organisations différentes révèle qu'entre 1992 et 2017, le Groenland et l'Antarctique ont perdu 6.400 milliards de tonnes de glace.
              </p>
              <br />
            </Col>
          </Row>
          <br />
        </Container>
      </div>
      <SimpleForm />
      <Footer />
    </>
  );
}

export default ProfilePage;
