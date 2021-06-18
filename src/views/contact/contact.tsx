import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TitleComponent from '../../components/title/title';
import EmailComponent from '../../components/email/email';
import { FooterComponent } from '../../components/footer/footer';
import './contact.css'

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row style={{marginTop: 25}}>
                        <Col lg={{span: 6, offset: 2}}>
                            <TitleComponent title="Enquiries" alignment='left' hrColor='black'/> 
                        </Col>
                    </Row>
                    <Row style={{marginTop: 20}}>
                        <Col lg={{span: 6, offset: 2}}>
                            <div>
                                <div>   
                                    <p className="subHeader"><img src={require('../../assets/icons/phone-receiver.png')}/> Contact Sales Development Programs Ltd</p>
                                </div>
                                <hr />
                                <p style={{marginBottom: 0, fontSize: 20}}>Phone: +649 5331466</p>
                                <p style={{fontSize: 20}}>Email: martin@martinspires.co.nz</p>
                            </div>
                        </Col>
                    </Row>
                    {/* <Row style={{marginTop: 20}}>
                        <Col lg={{span: 6, offset: 2}}>
                        <div>
                            <div>   
                                <p className="subHeader"><img src={require('../../assets/icons/close-envelope.png')}/> Email Directly</p>
                            </div>
                        </div>
                            <EmailComponent />
                        </Col>
                    </Row> */}
                </Container>
                <FooterComponent />
            </div>
        )
    }
}