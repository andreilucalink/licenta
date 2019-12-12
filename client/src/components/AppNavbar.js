import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Tooltip,
  Button
} from "reactstrap";
import { withAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "../../node_modules/alertifyjs/build/css/alertify.min.css";
import alertify from "alertifyjs";

export default withAuth(
  class AppNavbar extends Component {
    state = {
      isOpen: false,
      tooltipOpen: false,
      authenticated: null
    };

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    tooltipToggle = () => {
      this.setState({
        tooltipOpen: !this.state.tooltipOpen
      });
    };

    checkAuthentication = async () => {
      const authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({
          authenticated
        });
      }
    };

    alertMe = () => {
      alertify.set("notifier", "position", "top-right");
      alertify.success("Copiat în clipboard!").dismissOthers();
    };

    async componentDidMount() {
      this.checkAuthentication();
    }

    async componentDidUpdate() {
      this.checkAuthentication();
    }

    login = async () => {
      this.props.auth.login("/");
    };

    logout = async () => {
      this.props.auth.logout("/login");
    };

    render() {
      //Conditie autentificare pentru afisare buton log-in/log-out

      if (this.state.authenticated === null) return null;
      const mainContent = this.state.authenticated ? (
        <div onClick={this.logout}>
          <i className="fas fa-sign-out-alt" title="Logout" />
          &nbsp;Logout
        </div>
      ) : (
        <div onClick={this.login}>
          <i className="fas fa-sign-in-alt" title="Login" />
          &nbsp;Login
        </div>
      );

      return (
        <div>
          <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
              <NavbarBrand>
                <Link to="/" className="navbarlinks">
                  Gestionarea problemelor de mentenanţă
                </Link>
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav
                  className="ml-auto"
                  navbar
                  style={{ marginRight: "0.5em" }}
                >
                  <NavItem>
                    <NavLink>
                      <Link to="/" className="navbarlinks">
                        <i className="fas fa-home" title="Home" />
                      </Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <Link to="/mentenanta" className="navbarlinks">
                        <i className="fas fa-tools" title="Mentenanţă" />
                      </Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <Link to="/user" className="navbarlinks">
                        <i class="fas fa-user" title="User" />
                      </Link>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>
                      <a
                        href="mailto:andreilucalink@gmail.com"
                        className="navbarlinks"
                      >
                        <i class="fas fa-envelope" id="tooltip-show" />
                        <CopyToClipboard text={"andreilucalink@gmail.com"}>
                          <Tooltip
                            style={{ marginTop: "5px" }}
                            target="tooltip-show"
                            placement="bottom"
                            isOpen={this.state.tooltipOpen}
                            autohide={false}
                            toggle={this.tooltipToggle}
                          >
                            <Button
                              size="sm"
                              color="info"
                              onClick={this.alertMe}
                              style={{
                                marginTop: "0.5em",
                                marginBottom: "0.5em"
                              }}
                            >
                              {" "}
                              Copy E-mail{" "}
                            </Button>{" "}
                            <br /> Contact administrator:
                            andreilucalink@gmail.com
                          </Tooltip>
                        </CopyToClipboard>
                      </a>
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink>
                      <Link to="/login" className="navbarlinks">
                        {mainContent}
                      </Link>
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        </div>
      );
    }
  }
);
//export default AppNavbar;
