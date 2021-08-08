import React from 'react';
import ModalImage from 'react-modal-image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import './testimonials.css';
import TitleComponent from '../../components/title/title';
import { FooterComponent } from '../../components/footer/footer';

export default class Testimonials extends React.Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row style={{marginTop: 25}}>
                        <Col lg={{offset: 2, span: 8}}>
                            <TitleComponent title="Testimonials" alignment='left' hrColor='black'/> 
                        </Col>
                    </Row>
                    <Row className="imageRow" style={{marginTop: 30}}> 
                        <Col sm={6} lg={{span: 2, offset: 2}}>
                        <ModalImage small={require('../../assets/images/buildtrust.jpg')} large={require('../../assets/images/buildtrust.jpg')} className="smallImage"/>
                            <p className="imageText">
                                Building Trust
                            </p>
                        </Col>
                        <Col sm={6} lg={2}>
                            <ModalImage small={require('../../assets/images/mapei.jpg')} large={require('../../assets/images/mapei.jpg')} className="smallImage"/>
                            <p className="imageText">
                                Mapei
                            </p>
                        </Col>
                        <Col sm={6} lg={2}>
                            <ModalImage small={require('../../assets/images/stiles.jpg')} large={require('../../assets/images/stiles.jpg')} className="smallImage"/>
                            <p className="imageText">
                                Stiles Machinery
                            </p>
                        </Col>
                        <Col sm={6} lg={2}>
                            <ModalImage small={require('../../assets/images/hella.jpg')} large={require('../../assets/images/hella.jpg')} className="smallImage"/>
                            <p className="imageText">
                                Hella
                            </p>
                        </Col>
                    </Row>
                    <Row className="imageRow"> 
                        <Col sm={6} lg={{span: 2, offset: 2}}>
                            <ModalImage small={require('../../assets/images/altex.jpg')} large={require('../../assets/images/altex.jpg')} className="smallImage"/>
                            <p className="imageText"> 
                                Altex Coatings
                            </p>
                        </Col>
                        <Col sm={6} lg={2}>
                            <ModalImage small={require('../../assets/images/gea-new.jpg')} large={require('../../assets/images/gea-new.jpg')} className="smallImage"/>
                            <p className="imageText">
                                GEA
                            </p>
                        </Col>
                        <Col sm={6} lg={2}>
                            <ModalImage small={require('../../assets/images/atlas.jpg')} large={require('../../assets/images/atlas.jpg')} className="smallImage"/>
                            <p className="imageText">
                                Atlas Concrete
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
                        <Col sm={6} lg={{offset: 2, span: 2}}>
                            <ModalImage small={require('../../assets/images/nda.jpg')} large={require('../../assets/images/nda.jpg')} className="smallImage"/>
                                <p className="imageText">
                                    NDA Engineering
                                </p>
                        </Col>
                        <Col sm={6} lg={2}>
                            <ModalImage small={require('../../assets/images/jacks.jpg')} large={require('../../assets/images/jacks.jpg')} className="smallImage"/>
                            <p className="imageText">
                                Jacks
                            </p>
                        </Col>
                    </Row>

                </Container>
                <FooterComponent />
            </div>
        )
    }
}