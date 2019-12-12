import React, { Component } from "react";
import { UncontrolledCarousel, Container, Button } from "reactstrap";
import "../css/dropdown.css";
import Collapsible from "react-collapsible";

const items = [
  {
    src: "image5.jpg"
  },
  {
    src: "image2.jpg"
  },
  {
    src: "image3.jpg"
  },
  {
    src: "image4.jpg"
  },
  {
    src: "image1.jpg"
  },
  {
    src: "image6.png"
  }
];

class Home extends Component {
  render() {
    return (
      <div
        className="container"
        style={{
          display: "flex"
        }}
      >
        <Container
          style={{
            width: "30%",
            backgroundColor: "azure",
            padding: "10px",
            float: "left",
            borderRadius: "8px"
          }}
        >
          <h5
            style={{
              fontWeight: "bold",
              marginBottom: "2em",
              overflowWrap: "break-word"
            }}
          >
            Manuale de utilizare şi service
          </h5>
          <div style={{ marginBottom: "1em" }}>
            <Collapsible
              trigger="Anestezie"
              triggerClassName="btn btn-info "
              triggerOpenedClassName="btn btn-dark"
              triggerStyle={{
                cursor: "pointer",
                width: "100%",
                fontWeight: "bold"
              }}
              transitionTime="100"
              id="collapse"
            >
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Aeonmed Aeon 7400
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/anaesthesia/user_manuals/Aeonmed%20Aeon%207400%20Anaesthesia%20machine%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/anaesthesia/service_manuals/Aeonmed%20Aeon%207400%20Anaesthesia%20machine%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Penlon EMO
                <div>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/anaesthesia/user_manuals/Penlon_EMO_-_User_manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/anaesthesia/service_manuals/Penlon_EMO_Franks_Service_Instruction.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Penlon OMV 50
                <div>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/anaesthesia/user_manuals/Penlon%20OMV%20Fifty%20Vaporizer%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/anaesthesia/service_manuals/Penlon_OMV_Franks_Service_Instructions.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Heyer Modular
                <div>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/anaesthesia/user_manuals/Heyer%20Modular%20Anaesthesia%20System%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/anaesthesia/service_manuals/Heyer%20Modular%20Anaesthesia%20System%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Heyer Narkomat+
                <div>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/anaesthesia/user_manuals/Heyer%20Narkomat+%20Anaesthesia%20System%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/anaesthesia/service_manuals/Heyer%20Narkomat%20Anaesthesia%20System%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Penlon Prima SP2
                <div>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/anaesthesia/user_manuals/Penlon%20Prima%20SP2%20Anaesthetic%20Machine%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/anaesthesia/service_manuals/Penlon_Prima_SP2_Anaesthetic_Machine_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
            </Collapsible>
          </div>
          <div style={{ marginTop: "1em" }}>
            <Collapsible
              trigger="Autoclave"
              triggerClassName="btn btn-info"
              triggerOpenedClassName="btn btn-dark"
              triggerStyle={{
                cursor: "pointer",
                width: "100%",
                fontWeight: "bold"
              }}
              transitionTime="100"
            >
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                AJC Uniclave 88
                <div>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/service_manuals/AJC_Uniclave_88_-_User_and_service_manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/service_manuals/AJC_Uniclave_88_-_User_and_service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Cisa 200
                <div>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/service_manuals/Cisa%20200%20Autoclave%20-%20User%20and%20service%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/service_manuals/Cisa%20200%20Autoclave%20-%20User%20and%20service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Cominox SterilClave 18-24
                <div>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/user_manuals/Cominox%20SterilClave%2018-24%20-%20User%20and%20maintenance%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/service_manuals/Cominox_SteriClave_18-24_-_Maintenance_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Erna Sterilizer KK-6610
                <div>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/user_manuals/Erna%20Sterilizer%20KK6610%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/service_manuals/Erna_Sterilizer_KK_6610_-_Installation_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Eschmann Little Sister 3
                <div>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/user_manuals/Eschmann%20SES%20Little%20Sister%203%20Autoclave%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/service_manuals/Eschmann%20Little%20Sister%203%20Autoclave%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Euronda E9 Inspection, Recorder, Med
                <div>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/service_manuals/Euronda%20E9%20Inspection,%20Recorder,%20Med%20Sterilizer%20-%20Service%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/service_manuals/Euronda%20E9%20Inspection,%20Recorder,%20Med%20Sterilizer%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Hanshin HS-1212, 1321, 9041
                <div>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/service_manuals/Hanshin%20HS-1212,1321,9041%20Sterilizer%20-%20User%20and%20service%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/service_manuals/Hanshin%20HS-1212,1321,9041%20Sterilizer%20-%20User%20and%20service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Igea 2400
                <div>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/user_manuals/Igea%202400%20Sterilizer%20-%20User%20and%20service%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/service_manuals/Igea%202400%20Sterilizer%20-%20User%20and%20service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Tuttnauer M, MK-Series
                <div>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/service_manuals/Tuttnauer%20M,%20MK-Series%20Autoclave%20-%20User%20and%20maintenance%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/autoclaves/service_manuals/Tuttnauer%20M,%20MK-Series%20Autoclave%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
            </Collapsible>
          </div>
          <div style={{ marginTop: "1em" }}>
            <Collapsible
              trigger="Centrifuge"
              triggerClassName="btn btn-info"
              triggerOpenedClassName="btn btn-dark"
              triggerStyle={{
                cursor: "pointer",
                width: "100%",
                fontWeight: "bold"
              }}
              transitionTime="100"
            >
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                ALC PK 110
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/centrifuges/user_manuals/ALC%20PK110%20Cenrifuge%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/centrifuges/user_manuals/ALC%20PK110%20Cenrifuge%20-%20User%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Hettich EBA-20S
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/centrifuges/user_manuals/Hettich%20EBA%2020%20S%20Centrifuge%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/centrifuges/service_manuals/Hettich%20EBA-20S%20Centrifuge%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Hettich Rotina 420/R
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/centrifuges/user_manuals/Hettich%20Rotina%20420%20Centrifuge%20-%20User%20manual%20(ger,en,fr,it).pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/centrifuges/service_manuals/Hettich%20Rotina%20420%20-%20Repair%20instructions.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Hettich Universal 320/R
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/centrifuges/user_manuals/Hettich%20Universal%20320%20Centrifuge%20-%20User%20manual%20(ger,en,fr,it).pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/centrifuges/service_manuals/Hettich%20Universal%20320%20Centrifuge%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Restek Q-sep 3000
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/centrifuges/service_manuals/Restek%20Q-sep%203000%20Centrifuge%20-%20Service%20and%20user%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/centrifuges/service_manuals/Restek%20Q-sep%203000%20Centrifuge%20-%20Service%20and%20user%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
            </Collapsible>
          </div>
          <div style={{ marginTop: "1em" }}>
            <Collapsible
              trigger="Defibrilatoare"
              triggerClassName="btn btn-info"
              triggerOpenedClassName="btn btn-dark"
              triggerStyle={{
                width: "100%",
                cursor: "pointer",
                fontWeight: "bold"
              }}
              transitionTime="100"
            >
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Bexen Reanibex 700
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/user_manuals/Bexen%20Reanibex%20700%20Defibrillator%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/service_manuals/Bexen%20Reanibex%20700%20Defibrillator%20-%20Technical%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Burdick Medic 5
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/user_manuals/Burdick%20Medic%205%20Defibrillator%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/service_manuals/Burdick%20Medic%205%20Defibrillator%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Cardiac Science AED G3
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/user_manuals/CardiacScience_AED_G3_-_Service_manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/service_manuals/CardiacScience_AED_G3_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Cardiac Science AED G3 Pro
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/user_manuals/CardiacScience_AED_G3+_-_Service_manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/service_manuals/CardiacScience_AED_G3_Pro_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Cardiolife TEC-7100, 7200
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/user_manuals/Nihon_Kohden_Cardiolife_TEC-7100,7200_-_User_manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/service_manuals/Nihon_Kohden_Cardiolife_TEC-7100-7300_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                HP CodeMaster XL+
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/user_manuals/HP%20CodeMaster%20XL+%20Defibrillator%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/service_manuals/HP_M1722_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Medtronic LifePak 12
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/user_manuals/Medtronic%20Lifepak%2012%20Defibrillator%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/service_manuals/Medtronic_Lifepak_12_-_Service_Manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Phillips HeartStart Mrx
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/user_manuals/Philips%20HeartStart%20MRx%20-%20User%20manual%20(2005).pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/defibrillators/service_manuals/Philips_HeartStart_MRx_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
            </Collapsible>
          </div>
          <div style={{ marginTop: "1em" }}>
            <Collapsible
              trigger="Dializoare"
              triggerClassName="btn btn-info"
              triggerOpenedClassName="btn btn-dark"
              triggerStyle={{
                width: "100%",
                cursor: "pointer",
                fontWeight: "bold"
              }}
              transitionTime="100"
            >
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Fresenius 5008
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/dialysis_units/user_manuals/Fresenius%205008%20Hemodialysis%20System%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/dialysis_units/service_manuals/Fresenius%205008%20Hemodialysis%20System%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Gambro Prismaflex
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/dialysis_units/user_manuals/Gambro%20Prismaflex%20Dialysis%20-%20User%20training.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/dialysis_units/service_manuals/Gambro%20Prismaflex%20Dialysis%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Nipro Surdial
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/dialysis_units/user_manuals/Nipro%20Surdial%20Dialysis%20Machine%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/dialysis_units/service_manuals/Nipro%20Surdial%20Dialysis%20Machine%20-%20Maintenance%20part%20list.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
            </Collapsible>
          </div>
          <div style={{ marginTop: "1em" }}>
            <Collapsible
              trigger="ECG"
              triggerClassName="btn btn-info"
              triggerOpenedClassName="btn btn-dark"
              triggerStyle={{
                width: "100%",
                cursor: "pointer",
                fontWeight: "bold",
                overflowWrap: "break-word"
              }}
              transitionTime="100"
            >
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Burdick E350i
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ecg/user_manuals/Burdick%20E350i%20ECG%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ecg/service_manuals/Burdick%20E350i%20ECG%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Cardioline AR-1200 View
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ecg/user_manuals/Cardioline%20ar1200view%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ecg/service_manuals/Cardioline_AR_1200_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Colin BP-S510
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ecg/user_manuals/Colin%20BP-S510%20Monitor%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ecg/service_manuals/Omron_Colin_BP-S510_Monitor_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                HP PageWriter 200/300
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ecg/user_manuals/HP%20PageWriter%20200,300pi%20ECG%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ecg/service_manuals/Philips_PageWriter100-200-300_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                GE Transport Pro
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ecg/user_manuals/GE%20Transport%20Pro%20Patient%20Monitor%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ecg/service_manuals/Marquette_TransportPro_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
            </Collapsible>
          </div>
          <div style={{ marginTop: "1em" }}>
            <Collapsible
              trigger="Electroterapie"
              triggerClassName="btn btn-info"
              triggerOpenedClassName="btn btn-dark"
              triggerStyle={{
                width: "100%",
                cursor: "pointer",
                fontWeight: "bold"
              }}
              transitionTime="100"
            >
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                B.Braun Stimuplex HNS 12
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/electrotherapy/user_manuals/B.Braun_Stimuplex%20HNS12_-_User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/electrotherapy/service_manuals/B.Braun_Stimuplex_HNS12_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                BTL 5000 Shockwave
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/electrotherapy/user_manuals/BTL%20Shockwave%205000%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/electrotherapy/service_manuals/BTL%205000%20Shockwave%20-%20Service%20manual%20.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Enraf Nonius Curapuls 670
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/electrotherapy/user_manuals/Enraf%20Nonius%20Curapuls%20670%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/electrotherapy/service_manuals/Enraf_Nonius_Curapuls_670_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                GBO Stereodynator 928
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/electrotherapy/user_manuals/GBO%20Stereodynator%20928%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/electrotherapy/service_manuals/GBO_Neuroton,Stereodynator,Sonodynator_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Physiomed Expert
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/electrotherapy/user_manuals/Physiomed%20Expert%20stimulation%20current%20therapy%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/electrotherapy/service_manuals/Physiomed_Expert2_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Physiomed Physiotherm-S
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/electrotherapy/user_manuals/Physiomed%20Physiotherm-S%20short%20wave%20therapy%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/electrotherapy/service_manuals/Physiomed_Physiotherm-S_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
            </Collapsible>
          </div>
          <div style={{ marginTop: "1em" }}>
            <Collapsible
              trigger="Endoscopie"
              triggerClassName="btn btn-info"
              triggerOpenedClassName="btn btn-dark"
              triggerStyle={{
                width: "100%",
                cursor: "pointer",
                fontWeight: "bold"
              }}
              transitionTime="100"
            >
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                ACMI DUR Invisio Ureteroscope
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/endoscopy/user_manuals/ACMI%20AUR,DUR%20Ureteroscope%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/endoscopy/service_manuals/ACMI%20DUR%20Invisio%20Ureteroscope%20-%20User%20and%20service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                ESS Xenon XL-A100
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.endoscopy.com/downloads/pdf/manuals/ESS_XL-A100-M100.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.endoscopy.com/downloads/pdf/manuals/ESS_XL-A100-M100.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Olympus OEV-261H
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/endoscopy/user_manuals/Olympus%20OEV-261%20Monitor%20-%20Instructions.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/endoscopy/service_manuals/Olympus_OEV261H_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
            </Collapsible>
          </div>
          <div style={{ marginTop: "1em" }}>
            <Collapsible
              trigger="Incubatoare"
              triggerClassName="btn btn-info"
              triggerOpenedClassName="btn btn-dark"
              triggerStyle={{
                width: "100%",
                cursor: "pointer",
                fontWeight: "bold"
              }}
              transitionTime="100"
            >
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Air-Shields TI-100
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/infant_incubators/user_manuals/Air-Shields%20Ti-100%20Incubator%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/infant_incubators/service_manuals/Air-Shields%20Ti-100%20Incubator%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Atom V-850
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/infant_incubators/user_manuals/Atom%20V-850%20Infant%20Incubator%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/infant_incubators/service_manuals/Atom_V-850_Infant_Incubator_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Dräger Babytherm 8004, 8010
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/infant_incubators/user_manuals/Dr%C3%A4ger%20Babytherm%208004-8010%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/infant_incubators/service_manuals/Drager_Babytherm8004-8010_-_Service%20_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Dräger Caleo
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/infant_incubators/user_manuals/Dr%C3%A4ger%20Caleo%20Incubator%20-%20User%20manual%20(en).pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/infant_incubators/service_manuals/Drager_Caleo_Incubator_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Ginevri OGB PolyCare 2
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/infant_incubators/user_manuals/Ginevri%20OGB%20PolyCare%202%20Incubator%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/infant_incubators/service_manuals/Ginevri%20OGB%20PolyCare%202%20Incubator%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Ginevri OGB PolyCare 3
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/infant_incubators/user_manuals/Ginevri%20OGB%20PolyCare%203%20Incubator%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/infant_incubators/service_manuals/Ginevri%20OGB%20PolyCare%203%20Incubator%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Ginevri OGB PolyTrend
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/infant_incubators/user_manuals/Ginevri%20OGB%20PolyTrend%20Incubator%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/infant_incubators/service_manuals/Ginevri%20OGB%20PolyTrend%20Incubator%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
            </Collapsible>
          </div>
          <div style={{ marginTop: "1em" }}>
            <Collapsible
              trigger="Mese de operatie"
              triggerClassName="btn btn-info"
              triggerOpenedClassName="btn btn-dark"
              triggerStyle={{
                width: "100%",
                cursor: "pointer",
                fontWeight: "bold"
              }}
              transitionTime="100"
            >
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Apelem Baccara 90/20 &amp; 90/25HV
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/operating_tables/user_manuals/Apelem%20Baccara%2090%20Table%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/operating_tables/service_manuals/Apelem%20Baccara%2090%20Table%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Eschmann T-20
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/operating_tables/user_manuals/Eschmann_T20series_OperatingTable_UserGuide.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/operating_tables/service_manuals/Eschmann_T-20_Operation_Table_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                FHSurgical Cmax
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/operating_tables/user_manuals/FHSurgical_Cmax_Operator_manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/operating_tables/service_manuals/FHSurgical_Cmax_NTR_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Mizuho Osi 5803
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/operating_tables/user_manuals/Mizuho%20Osi%205803%20Operating%20Table%20-%20User%20manual%20(2014).pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/operating_tables/service_manuals/Mizuho%20Osi%205803%20Operating%20Table%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Ohio 7300
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/operating_tables/service_manuals/Ohio%207300%20Operating%20Table%20-%20Installation%20and%20user%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/operating_tables/service_manuals/Ohio%207300%20Operating%20Table%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
            </Collapsible>
          </div>
          <div style={{ marginTop: "1em" }}>
            <Collapsible
              trigger="Raze X"
              triggerClassName="btn btn-info"
              triggerOpenedClassName="btn btn-dark"
              triggerStyle={{
                width: "100%",
                cursor: "pointer",
                fontWeight: "bold"
              }}
              transitionTime="100"
            >
              {/* Aparatura X-Ray */}
              <Button
                color="secondary"
                disabled
                size="sm"
                style={{
                  marginTop: "5px",
                  marginBottom: "5px",
                  width: "100%"
                }}
              >
                Aparatura cu raze X
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Apelem Kristal X-Ray Table
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/user_manuals/Apelem%20Kristal%20X-Ray%20Table%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/service_manuals/Apelem%20Kristal%20X-Ray%20Table%20-%20Technical%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Bennett HFQ-100
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/service_manuals/Bennett%20HFQ-100%20X-Ray%20-%20User%20and%20service%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/service_manuals/Bennett%20HFQ-100%20X-Ray%20-%20User%20and%20service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Comed EVA-HF325, 525
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/user_manuals/Comed%20EVA-HF325,%20525%20X-Ray%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/service_manuals/Comed%20EVA-HF325,%20525%20X-Ray%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Del Uni-Matic 325D X-Ray Generator
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/service_manuals/Del%20Uni-Matic%20325D%20X-Ray%20Generator%20-%20User%20and%20service%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/service_manuals/Del%20Uni-Matic%20325D%20X-Ray%20Generator%20-%20User%20and%20service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Philips BV25T
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/user_manuals/Philips%20BV25T%20X-Ray%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/service_manuals/Philips_BV-25_T_-_Operational_Manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Sirona Galileos Dental X-Ray
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/user_manuals/Sirona%20Galileos%20Dental%20X-Ray%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/service_manuals/Sirona%20Galileos%20Dental%20X-Ray%20-%20Maintenance%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              {/* Printer film */}
              <Button
                color="secondary"
                disabled
                size="sm"
                style={{
                  marginTop: "5px",
                  marginBottom: "5px",
                  width: "100%"
                }}
              >
                Printer film raze X
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Kodak Ektascan 1120 Laserprinter
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/user_manuals/x-ray_film_printer/Kodak%20Ektascan%201120%20Laserprinter%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/service_manuals/x-ray_film_printer/Kodak%20Ektascan%201220%20Laserprinter%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              {/* Procesoare film */}
              <Button
                color="secondary"
                disabled
                size="sm"
                style={{
                  marginTop: "5px",
                  marginBottom: "5px",
                  width: "100%"
                }}
              >
                Procesor film raze X
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Agfa Classic E.O.S
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/user_manuals/x-ray_film_processor/Agfa%20Classic%20E.O.S%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/service_manuals/x-ray_film_processor/Agfa_Classic_E.O.S._-_Reference_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                All-Pro 2010
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/service_manuals/x-ray_film_processor/All-Pro%202010%20Film%20Processor%20-%20User%20and%20service%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/service_manuals/x-ray_film_processor/All-Pro%202010%20Film%20Processor%20-%20User%20and%20service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Cawomat 2000 IR
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/user_manuals/x-ray_film_processor/Cawomat%202000%20IR%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/service_manuals/x-ray_film_processor/Cawomat_2000_IR_-_Reference_Manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Dürr XR 24 Nova
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/service_manuals/x-ray_film_processor/D%C3%BCrr%20XR24Nova%20Developer%20-%20User%20and%20maintenance%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/x-ray/service_manuals/x-ray_film_processor/D%C3%BCrr%20XR24Nova%20Developer%20-%20User%20and%20maintenance%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
            </Collapsible>
          </div>
          <div style={{ marginTop: "1em" }}>
            <Collapsible
              trigger="Ultrasunete"
              triggerClassName="btn btn-info"
              triggerOpenedClassName="btn btn-dark"
              triggerStyle={{
                width: "100%",
                cursor: "pointer",
                fontWeight: "bold"
              }}
              transitionTime="100"
            >
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Samsung UGEO H60
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ultrasonographs/user_manuals/Samsung%20UGEO%20H60%20Ultrasound%20-%20User%20manual%20Vol.1.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ultrasonographs/service_manuals/Samsung%20UGEO%20H60%20Ultrasound%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Sonosite M-turbo
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ultrasonographs/user_manuals/Sonosite%20M-turbo%20-%20User%20manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ultrasonographs/service_manuals/SonoSite%20M-Turbo%20Ultrasound%20System%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Sony UP-890CE/MD
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ultrasonographs/user_manuals/Sony_UP-890_Video_Printer_-_User_manual_(en,de,fr,es).pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ultrasonographs/service_manuals/Sony%20Video%20Printer%20UP-890%20-%20Service%20manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
              <Button
                color="warning"
                style={{
                  width: "100%",
                  marginTop: "5px",
                  marginBottom: "5px"
                }}
              >
                Ultrasound Technologies Fetatrack 360
                <div style={{ width: "auto" }}>
                  <img src="size.gif" alt="#" /> &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ultrasonographs/user_manuals/Ultrasound%20Technologies%20Fetatrack%20360%20Fetal%20Monitor%20-%20User%20Manual.pdf"
                  >
                    User Manual
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <img src="size.gif" alt="#" />
                  &nbsp;&nbsp;
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="http://www.frankshospitalworkshop.com/equipment/documents/ultrasonographs/service_manuals/Ultrasound_Technologies_Fetatrack_360_-_Service_manual.pdf"
                  >
                    Service Manual
                  </a>
                </div>
              </Button>
            </Collapsible>
          </div>
        </Container>
        <Container
          style={{
            marginLeft: "10px",
            width: "70%",
            webkitFilter: "drop-shadow(5px 5px 5px  #222 )",
            filter: "drop-shadow(5px 5px 5px  #222)"
          }}
        >
          <UncontrolledCarousel items={items} interval="3000" />
          <section
            style={{
              height: "auto",
              backgroundColor: "azure",
              marginTop: "1.5em",
              padding: "5px",
              borderRadius: "5px"
            }}
          >
            <h3
              style={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "0.5em"
              }}
            >
              {" "}
              Regulament intern pentru utilizarea aplicaţiei
            </h3>
            <Button
              outline
              color="dark"
              disabled
              style={{
                width: "100%",
                textAlign: "left",
                overflowWrap: "break-word",
                marginBottom: "0.5em"
              }}
            >
              1. Nu permiteţi accesul neautorizat prin împărtăşirea
              informaţiilor confidenţiale ale contului dumneavoastră!
            </Button>
            <Button
              outline
              color="dark"
              disabled
              style={{
                width: "100%",
                textAlign: "left",
                overflowWrap: "break-word",
                marginBottom: "0.5em"
              }}
            >
              2. La adăugarea unei noi probleme, completaţi toate câmpurile din
              cadrul formularului!
            </Button>
            <Button
              outline
              color="dark"
              disabled
              style={{
                width: "100%",
                textAlign: "left",
                overflowWrap: "break-word",
                marginBottom: "0.5em"
              }}
            >
              3. Este interzisă ştergerea problemelor introduse de către alţi
              utilizatori! La fel şi adăugarea problemelor în numele altor
              utilizatori!
            </Button>
            <Button
              outline
              color="dark"
              disabled
              style={{
                width: "100%",
                textAlign: "left",
                overflowWrap: "break-word",
                marginBottom: "0.5em"
              }}
            >
              4. Nu utilizaţi regimul de urgenţă în cazul în care nu este
              necesar! Problemele din acest modul reprezintă o prioritate pentru
              inginerii medicali!
            </Button>
          </section>
        </Container>
      </div>
    );
  }
}

export default Home;
