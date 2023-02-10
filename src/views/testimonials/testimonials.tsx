import React from "react";
import ModalImage from "react-modal-image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./testimonials.css";
import TitleComponent from "../../components/title/title";
import { FooterComponent } from "../../components/footer/footer";

export default class Testimonials extends React.Component {
  render() {
    return (
      <div>
        <Container fluid={true}>
          <Row style={{ marginTop: 25 }}>
            <Col lg={{ offset: 2, span: 8 }}>
              <TitleComponent
                title="Testimonials"
                alignment="left"
                hrColor="black"
              />
            </Col>
          </Row>
          <Row className="imageRow" style={{ marginTop: 30 }}>
            <Col sm={6} lg={{ span: 2, offset: 2 }}>
              <ModalImage
                small={require("../../assets/images/002.jpg")}
                large={require("../../assets/images/002.jpg")}
                className="smallImage"
              />
              <p className="imageText">Sika</p>
            </Col>
            <Col sm={6} lg={2}>
              <ModalImage
                small={require("../../assets/images/mapei.jpg")}
                large={require("../../assets/images/mapei.jpg")}
                className="smallImage"
              />
              <p className="imageText">Mapei</p>
            </Col>
            <Col sm={6} lg={2}>
              <ModalImage
                small={require("../../assets/images/034.jpg")}
                large={require("../../assets/images/034.jpg")}
                className="smallImage"
              />
              <p className="imageText">BS & B Safety Systems</p>
            </Col>
            <Col sm={6} lg={2}>
              <ModalImage
                small={require("../../assets/images/066.jpg")}
                large={require("../../assets/images/066.jpg")}
                className="smallImage"
              />
              <p className="imageText">Gea</p>
            </Col>
          </Row>
          <Row className="imageRow">
            <Col sm={6} lg={{ span: 2, offset: 2 }}>
              <ModalImage
                small={require("../../assets/images/078.jpg")}
                large={require("../../assets/images/078.jpg")}
                className="smallImage"
              />
              <p className="imageText">YRCO</p>
            </Col>
            <Col sm={6} lg={2}>
              <ModalImage
                small={require("../../assets/images/080.jpg")}
                large={require("../../assets/images/080.jpg")}
                className="smallImage"
              />
              <p className="imageText">Higgins Concrete</p>
            </Col>
            <Col sm={6} lg={2}>
              <ModalImage
                small={require("../../assets/images/088.jpg")}
                large={require("../../assets/images/088.jpg")}
                className="smallImage"
              />
              <p className="imageText">Lubrication Engineering</p>
            </Col>
            <Col sm={6} lg={2}>
              <ModalImage
                small={require("../../assets/images/dex.jpg")}
                large={require("../../assets/images/dex.jpg")}
                className="smallImage"
              />
              <p className="imageText">Dexion Group</p>
            </Col>
          </Row>
          <Row className="imageRow">
            <Col sm={6} lg={{ offset: 2, span: 2 }}>
              <ModalImage
                small={require("../../assets/images/nda.jpg")}
                large={require("../../assets/images/nda.jpg")}
                className="smallImage"
              />
              <p className="imageText">NDA Engineering</p>
            </Col>
            <Col sm={6} lg={2}>
              <ModalImage
                small={require("../../assets/images/jacks.jpg")}
                large={require("../../assets/images/jacks.jpg")}
                className="smallImage"
              />
              <p className="imageText">Jacks</p>
            </Col>
          </Row>
        </Container>
        <FooterComponent />
      </div>
    );
  }
}
