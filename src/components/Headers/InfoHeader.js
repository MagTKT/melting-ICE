import React, { useState } from "react";

import { Container } from "reactstrap";


function LandingPageHeader() {
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

        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;