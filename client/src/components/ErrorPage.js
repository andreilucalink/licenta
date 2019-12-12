import React from "react";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <Container>
      <div style={{ textAlign: "center" }}>
        <img
          src="404.png"
          alt="error"
          style={{
            paddingLeft: "3rem",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "60%",
            webkitFilter: "drop-shadow(5px 5px 5px #222 )",
            filter: "drop-shadow(5px 5px 5px #222)"
          }}
        />
        <h1 style={{ fontWeight: "bold" }}>Oops!</h1>
        <h3 style={{ fontWeight: "bold" }}>
          404: Pagina solicitată nu există!
        </h3>
        <br />
        <Link to="/">
          <Button color="light" style={{ fontWeight: "bold", margin: "1em" }}>
            Home
          </Button>
        </Link>
        <Link to="/login">
          <Button color="light" style={{ fontWeight: "bold" }}>
            Log In
          </Button>
        </Link>
      </div>
    </Container>
  );
}
export default ErrorPage;
