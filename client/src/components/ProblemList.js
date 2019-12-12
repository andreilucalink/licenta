import React, { Component } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavLink,
  NavItem,
  Container,
  ListGroup,
  ListGroupItem,
  Button,
  Input
} from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem, addItem } from "../actions/itemActions";
import propTypes from "prop-types";
import "../../node_modules/alertifyjs/build/css/alertify.min.css";
import alertify from "alertifyjs";
import ItemModal from "./ItemModal";
import classnames from "classnames";
const accents = require("remove-accents");

//////////////////////////////////////////////////////////////////////////
/////////////////////////Filtrare pentru locatie/////////////////////////
////////////////////////////////////////////////////////////////////////
function searchingFor(term) {
  return function(x) {
    return (
      accents
        .remove(x.name)
        .toLowerCase()
        .includes(term.toLowerCase()) || !term
    );
  };
}
////////////////////////////////////////////////////////////////////////////
/////////////////////////Filtrare pentru probleme//////////////////////////
//////////////////////////////////////////////////////////////////////////

function searchingFor2(term2) {
  return function(y) {
    return (
      accents
        .remove(y.description)
        .toLowerCase()
        .includes(term2.toLowerCase()) || !term2
    );
  };
}
function problemUrgent(urg) {
  return function(z) {
    return z.urgenta.includes(urg) || !urg;
  };
}

class ProblemList extends Component {
  ///////////////////TEST//////////////////////

  /////////////////////////////////////////////
  componentDidMount() {
    this.props.getItems();
  }

  //-------------Functia de delete------------- // (poate fi orice, nu neaparat 'id' la parametrul functiei sageata)

  onDeleteClick = id => {
    alertify.confirm(
      "Sunteti sigur(a) ca doriti sa stergeti aceasta problema?",
      () => {
        alertify.set("notifier", "position", "bottom-right");
        alertify.success("Sters").dismissOthers();
        this.props.deleteItem(id);
      },
      () => {
        alertify.set("notifier", "position", "bottom-right");
        alertify.error("Anulat").dismissOthers();
      }
    );
  };

  state = {
    currentUserName: "",
    currentUserEmail: "",
    term: "",
    term2: "",
    activeTab: "1",
    urg: "Da"
  };

  constructor(props) {
    super(props);
    this.searchHandler = this.searchHandler.bind(this);
    this.searchHandler2 = this.searchHandler2.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  //Metode pentru filtre -- searchHandler
  searchHandler(event) {
    this.setState({ term: event.target.value });
  }
  searchHandler2(event) {
    this.setState({ term2: event.target.value });
  }

  render() {
    const { items } = this.props.item;
    const { term } = this.state;
    const { term2 } = this.state;

    return (
      //-------------Container principal ce contine toate elementele-------------//
      <div>
        <Container>
          <ItemModal />
          <Nav tabs style={{ marginBottom: "0.5em" }}>
            <NavItem style={{ cursor: "pointer" }}>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggleTab("1");
                }}
                style={{ fontWeight: "bold" }}
              >
                Toate problemele
              </NavLink>
            </NavItem>
            <NavItem style={{ cursor: "pointer" }}>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggleTab("2");
                }}
                style={{ fontWeight: "bold" }}
              >
                Regim de urgenţă
              </NavLink>
            </NavItem>
          </Nav>
          <Input
            type="text"
            onChange={this.searchHandler}
            value={term}
            style={{ marginBottom: "0.5em", width: "205px" }}
            placeholder="Filtru locatie"
          />

          <Input
            type="text"
            onChange={this.searchHandler2}
            style={{
              marginTop: "10px",
              marginBottom: "0.5em",
              width: "205px"
            }}
            placeholder="Filtru probleme"
            value={term2}
          />
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <ListGroup>
                <TransitionGroup className="problem-list">
                  {items
                    .filter(searchingFor(this.state.term))
                    .filter(searchingFor2(this.state.term2))
                    .map(({ _id, name, description, contact }) => (
                      <CSSTransition key={_id} timeout={300} classNames="fade">
                        {/*-------------Container cu problema: locatie + descriere-------------*/}
                        <ListGroupItem style={{ marginBottom: "0.3rem" }}>
                          {/* ----------Delete button-------------*/}

                          <Button
                            className="remove-btn"
                            color="danger"
                            size="sm"
                            onClick={this.onDeleteClick.bind(this, _id)}
                            style={{ marginBottom: "0.5rem" }}
                          >
                            &times; Sterge
                          </Button>
                          <a href="mailto:">
                            <Button
                              color="info"
                              size="sm"
                              style={{ marginBottom: "0.5rem" }}
                            >
                              E-mail
                            </Button>
                          </a>
                          {/* -------------Camp locatie------------- */}
                          <ListGroup>
                            <ListGroupItem
                              style={{
                                marginBottom: "0.5rem",
                                backgroundColor: "rgba(148, 241, 255, 0.4)"
                              }}
                            >
                              Locatie:&nbsp;&nbsp;{name}
                            </ListGroupItem>
                          </ListGroup>

                          {/* -------------Camp descriere problema------------- */}
                          <ListGroup>
                            <ListGroupItem
                              style={{
                                overflowWrap: "break-word",
                                backgroundColor: "rgba(161, 243, 255, 0.4)",
                                marginBottom: "0.5rem"
                              }}
                            >
                              Problema:&nbsp;&nbsp;{description}
                            </ListGroupItem>
                          </ListGroup>
                          <ListGroup>
                            <ListGroupItem
                              style={{
                                overflowWrap: "break-word",
                                backgroundColor: "rgba(181, 245, 255, 0.4)"
                              }}
                            >
                              Contact telefonic sau e-mail:&nbsp;&nbsp;{contact}
                            </ListGroupItem>
                          </ListGroup>
                        </ListGroupItem>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </ListGroup>
            </TabPane>
            <TabPane tabId="2">
              <ListGroup>
                <TransitionGroup className="problem-list">
                  {items
                    .filter(searchingFor(this.state.term))
                    .filter(searchingFor2(this.state.term2))
                    .filter(problemUrgent(this.state.urg))
                    .map(({ _id, name, description, contact }) => (
                      <CSSTransition key={_id} timeout={300} classNames="fade">
                        {/*-------------Container cu problema: locatie + descriere-------------*/}
                        <ListGroupItem style={{ marginBottom: "0.3rem" }}>
                          {/* ----------Delete button-------------*/}
                          <Button
                            className="remove-btn"
                            color="danger"
                            size="sm"
                            onClick={this.onDeleteClick.bind(this, _id)}
                            style={{ marginBottom: "0.5rem" }}
                          >
                            &times; Sterge
                          </Button>
                          <a href="mailto:">
                            <Button
                              color="info"
                              size="sm"
                              style={{ marginBottom: "0.5rem" }}
                            >
                              E-mail
                            </Button>
                          </a>

                          {/* -------------Camp locatie------------- */}
                          <ListGroup>
                            <ListGroupItem
                              style={{
                                marginBottom: "0.5rem",
                                backgroundColor: "rgba(242, 111, 111, 0.4)"
                              }}
                            >
                              Locatie:&nbsp;&nbsp;{name}
                            </ListGroupItem>
                          </ListGroup>

                          {/* -------------Camp descriere problema------------- */}
                          <ListGroup>
                            <ListGroupItem
                              style={{
                                overflowWrap: "break-word",
                                backgroundColor: "rgba(161, 243, 255, 0.4)",
                                marginBottom: "0.5rem"
                              }}
                            >
                              Problema:&nbsp;&nbsp;{description}
                            </ListGroupItem>
                          </ListGroup>
                          <ListGroup>
                            <ListGroupItem
                              style={{
                                overflowWrap: "break-word",
                                backgroundColor: "rgba(181, 245, 255, 0.4)"
                              }}
                            >
                              Contact telefonic/mail:&nbsp;&nbsp;{contact}
                            </ListGroupItem>
                          </ListGroup>
                        </ListGroupItem>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </ListGroup>
            </TabPane>
          </TabContent>
        </Container>
      </div>
    );
  }
}

ProblemList.propTypes = {
  getItems: propTypes.func.isRequired,
  item: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item // "item" este definit in index.js din folderul reducers
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem, addItem }
)(ProblemList);
