import React from 'react';
import ModalImage from 'react-modal-image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import './testimonials.css';
import TitleComponent from '../../components/title/title';

export default class Testimonials extends React.Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row style={{marginTop: 20}}>
                        <Col lg={{offset: 2, span: 8}}>
                            <TitleComponent title="Testimonials" alignment='left' hrColor='black'/> 
                        </Col>
                    </Row>
                    <Row className="imageRow" style={{marginTop: 30}}> 
                        <Col sm={6} lg={{span: 2, offset: 2}}>
                            <ModalImage small={require('../../assets/images/GEA.jpg')} large={require('../../assets/images/GEA.jpg')} className="smallImage"/>
                            <p className="imageText">
                                GEA Mechanical Equipment
                            </p>
                        </Col>
                        <Col sm={6} lg={2}>
                            <ModalImage small={require('../../assets/images/pepper.jpg')} large={require('../../assets/images/pepper.jpg')} className="smallImage"/>
                            <p className="imageText">
                                PEPPERL+FUCHS
                            </p>
                        </Col>
                        <Col sm={6} lg={2}>
                            <ModalImage small={require('../../assets/images/poly.jpg')} large={require('../../assets/images/poly.jpg')} className="smallImage"/>
                            <p className="imageText">
                                James Halstead Flooring
                            </p>
                        </Col>
                        <Col sm={6} lg={2}>
                            <ModalImage small={require('../../assets/images/homag.jpg')} large={require('../../assets/images/homag.jpg')} className="smallImage"/>
                            <p className="imageText">
                                Homag Canada
                            </p>
                        </Col>
                    </Row>
                    <Row className="imageRow"> 
                        <Col sm={6} lg={{span: 2, offset: 2}}>
                            <ModalImage small={require('../../assets/images/granite.jpg')} large={require('../../assets/images/granite.jpg')} className="smallImage"/>
                            <p className="imageText"> 
                                Granite Services International
                            </p>
                        </Col>
                        <Col sm={6} lg={2}>
                            <ModalImage small={require('../../assets/images/etl.jpg')} large={require('../../assets/images/etl.jpg')} className="smallImage"/>
                            <p className="imageText">
                                ETEL Transformers
                            </p>
                        </Col>
                        <Col sm={6} lg={2}>
                            <ModalImage small={require('../../assets/images/bsb.jpg')} large={require('../../assets/images/bsb.jpg')} className="smallImage"/>
                            <p className="imageText">
                                BS&B Safety Systems
                            </p>
                        </Col>
                        <Col sm={6} lg={2}>
                            <ModalImage small={require('../../assets/images/dex.jpg')} large={require('../../assets/images/dex.jpg')} className="smallImage"/>
                            <p className="imageText">
                                Dexion Group
                            </p>
                        </Col>
                    </Row>
                    <Row className="imageRow">
                        <Col lg={{offset: 2, span: 2}}>
                            <ModalImage small={require('../../assets/images/sika.jpg')} large={require('../../assets/images/sika.jpg')} className="smallImage"/>
                                <p className="imageText">
                                    SIKA NZ 
                                </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}