import React, { Component } from "react";
import {
  Container,
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle
} from "reactstrap";

class UserPage extends Component {
  //////////////////////////Preluare nume + email din login token//////////////////////////
  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  state = {
    currentUserName: "",
    currentUserEmail: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    //const form = this.state;
  };

  render() {
    const logo = this.state.currentUserEmail
      .toLocaleLowerCase()
      .includes("mentenanta")
      ? "logouserment2.png"
      : this.state.currentUserEmail.toLocaleLowerCase().includes("medical")
      ? "logousermed.png"
      : "logoadmin.png";

    const role = this.state.currentUserEmail
      .toLocaleLowerCase()
      .includes("mentenanta")
      ? "Mentenanta"
      : this.state.currentUserEmail.toLocaleLowerCase().includes("medical")
      ? "Institut medical"
      : "Administrator";

    const butonMongoDB = this.state.currentUserEmail
      .toLocaleLowerCase()
      .includes(
        "mentenanta"
      ) ? null : this.state.currentUserEmail
        .toLocaleLowerCase()
        .includes("medical") ? null : (
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://cloud.mongodb.com/user#/atlas/login"
      >
        <Button color="success" style={{ marginTop: "10em", width: "100%" }}>
          MongoDB Dashboard
        </Button>{" "}
      </a>
    );

    const butonOkta = this.state.currentUserEmail
      .toLocaleLowerCase()
      .includes("mentenanta") ? (
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://dev-587815.okta.com"
      >
        <Button color="primary" style={{ marginTop: "0.5em", width: "100%" }}>
          Profil Okta
        </Button>{" "}
      </a>
    ) : this.state.currentUserEmail.toLocaleLowerCase().includes("medical") ? (
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://dev-587815.okta.com"
      >
        <Button color="primary" style={{ marginTop: "0.5em", width: "100%" }}>
          Profil Okta
        </Button>{" "}
      </a>
    ) : (
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://dev-587815.okta.com"
      >
        <Button color="primary" style={{ marginTop: "0.5em", width: "100%" }}>
          Okta Dashboard
        </Button>{" "}
      </a>
    );

    return (
      <Container style={{ width: "100%" }}>
        <Card
          style={{
            width: "25rem",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: "8px",
            webkitFilter: "drop-shadow(5px 5px 5px #222 )",
            filter: "drop-shadow(5px 5px 5px #222)"
          }}
          className="text-center"
        >
          <CardImg
            variant="top"
            src={logo}
            style={{ width: "10rem", marginTop: "1em", marginBottom: "2em" }}
          />
          <br />
          <a href="mailto:">
            <Button color="info">Trimite un E-Mail</Button>
          </a>
          <CardBody>
            <CardTitle>
              <Button
                color="info"
                style={{ width: "100%", fontWeight: "bold" }}
              >
                Profil Utilizator
              </Button>
            </CardTitle>
            <Button
              disabled
              color="info"
              style={{
                width: "100%",
                fontWeight: "bold",
                marginBottom: "0.5em"
              }}
            >
              Nume si Prenume:
              <br />
              {this.state.currentUserName}
            </Button>
            <Button
              disabled
              color="info"
              style={{
                width: "100%",
                fontWeight: "bold",
                marginBottom: "0.5em"
              }}
            >
              Adresa de e-mail:
              <br />
              {this.state.currentUserEmail}
            </Button>
            <Button
              disabled
              color="info"
              style={{
                width: "100%",
                fontWeight: "bold",
                marginBottom: "1em"
              }}
            >
              {" "}
              Rol utilizator: <br /> {role}{" "}
            </Button>

            <br />
            {butonMongoDB}
            <br />
            {butonOkta}
          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default UserPage;
