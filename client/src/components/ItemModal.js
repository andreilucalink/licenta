import React, { Component } from "react";
import {
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Button
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import "../../node_modules/alertifyjs/build/css/alertify.min.css";
import alertify from "alertifyjs";

class ItemModal extends Component {
  state = {
    modal: false,
    name: "",
    description: "",
    contact: "",
    mail: "",
    urgenta: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (
      this.state.description === "" ||
      this.state.contact === "" ||
      this.state.name === "" ||
      this.state.urgenta === ""
    ) {
      alertify.set("notifier", "position", "bottom-right");
      alertify.error("Completati toate campurile!").dismissOthers();
    } else {
      alertify.set("notifier", "position", "bottom-right");
      alertify.success("Adaugare reusita!").dismissOthers();
    }
    const newItem = {
      name: this.state.name,
      description: this.state.description,
      contact: this.state.contact,
      urgenta: this.state.urgenta
    };

    //Add item via addItem action

    this.props.addItem(newItem);

    //Close modal

    this.toggle();
    this.setState({ description: "", contact: "", urgenta: "" });
  };

  render() {
    return (
      <div>
        <Button
          color="warning"
          style={{ marginBottom: "0.5em" }}
          onClick={this.toggle}
          size="lg"
        >
          Adauga o problema
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}> Adaugaţi o problemă</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup forhtml="item">
                <Label>Locatie </Label>
                <Input
                  type="select"
                  name="name"
                  onChange={this.onChange}
                  style={{ marginBottom: "1rem" }}
                >
                  <option>Alegeţi locatia</option>
                  <option>
                    Spitalul Clinic de Urgenta "Floreasca", &nbsp;Sector 1
                  </option>
                  <option>
                    Spitalul Clinic de Urgență București,&nbsp; Sector 1
                  </option>
                  <option>
                    Spitalul Clinic Urgenţă Copii Grigore Alexandrescu,&nbsp;
                    Sector 1
                  </option>
                  <option>Institutul Clinic Fundeni,&nbsp; Sector 2</option>
                  <option>Maternitatea Cantacuzino,&nbsp; Sector 2</option>
                  <option>
                    Maternitatea „Sfântul Pantelimon”, &nbsp;Sector 2
                  </option>
                  <option>Spitalul Clinic Colțea, &nbsp;Sector 3</option>
                  <option>
                    {" "}
                    Spitalul de boli cronice Sf. Luca, &nbsp; Sector 4
                  </option>
                  <option>
                    Spitalul Universitar de Urgență București,&nbsp;Sector 5
                  </option>
                </Input>
                <Label>Descriere problema </Label>
                <Input
                  type="textarea"
                  name="description"
                  rows="3"
                  onChange={this.onChange}
                  style={{ marginBottom: "1rem" }}
                />
                <Label>Contact</Label>
                <Input
                  type="text"
                  name="contact"
                  onChange={this.onChange}
                  style={{ marginBottom: "1rem" }}
                />
                <Label>Regim de urgenţă</Label>
                <Input type="select" name="urgenta" onChange={this.onChange}>
                  <option />
                  <option>Da</option>
                  <option>Nu</option>
                </Input>
                <Button style={{ marginTop: "2rem" }} block color="warning">
                  Adaugă
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});
export default connect(
  mapStateToProps,
  { addItem }
)(ItemModal);
