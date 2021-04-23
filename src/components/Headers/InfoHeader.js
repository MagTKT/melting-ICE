import React from "react";

import { Container } from "reactstrap";
import Quiz from "components/Quiz/Quiz.js";

function InfoHeader() {
  let pageHeader = React.createRef();
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/iceland.jpg").default + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
        <Quiz />
        </Container>
      </div>
    </>
  );
}

export default InfoHeader;