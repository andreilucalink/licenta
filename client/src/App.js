//Components/tools
import React, { Component } from "react";
import AppNavbar from "./components/AppNavbar";
import ProblemList from "./components/ProblemList";
import Login from "./auth/Login";
import UserPage from "./components/UserPage";
import store from "./store";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";

//Framework
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

//CSS
import "./App.css";

function onAuthRequired({ history }) {
  history.push("/login");
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Security
            issuer="https://dev-587815.okta.com/oauth2/default"
            client_id="0oao8vi9mPKb3JDhj356"
            redirect_uri={window.location.origin + "/implicit/callback"}
            onAuthRequired={onAuthRequired}
          >
            <AppNavbar />

            <Switch>
              <SecureRoute path="/" exact={true} component={Home} />
              <SecureRoute
                path="/mentenanta"
                exact={true}
                component={ProblemList}
              />
              <SecureRoute path="/user" exact={true} component={UserPage} />
              <Route
                path="/login"
                render={() => <Login baseUrl="https://dev-587815.okta.com" />}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
              <Route component={ErrorPage} />
            </Switch>

            <Footer />
          </Security>
        </Router>
      </Provider>
    );
  }
}
