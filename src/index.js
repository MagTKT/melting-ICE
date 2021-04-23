import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import InfoPage from "views/InfoPage.js";
import ProfilePage from "views/ProfilePage.js";
import ContactPage from "views/ContactPage.js";
import GamePage from "views/GamePage.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route 
      path="/index" 
      render={(props) => <Index {...props} />} />
      <Route
        path="/info-page"
        render={(props) => <InfoPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/game-page"
        render={(props) => <GamePage {...props} />}
      />
      <Route
        path="/contact-page"
        render={(props) => <ContactPage {...props} />}
      />
      <Redirect to="/index" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
