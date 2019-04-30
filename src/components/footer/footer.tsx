import React from 'react';
import Row from 'react-bootstrap/Row'; 
import './footer.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link, withRouter, NavLink, Redirect, RouteComponentProps } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { HomeComponent } from '../../views/home/home';

export class FooterComponent extends React.Component {

    render(){
        return (
                <div className='footerContainer justify-content-md-center'>
                    <Container fluid={true}>
                        <Row style={{paddingTop: 30}}> 
                            <Col lg={{offset: 1, span: 2}} sm={6}> 
                                <div>
                                    <NavLink to="/home">
                                        <p style={{color: 'white'}}>
                                        Sales Development Programs Ltd
                                        </p>
                                    </NavLink> 
                                </div>
                            </Col>
                            <Col lg={2} sm={6}> 
                               <div>
                                    <NavLink to="/company-focus">
                                        <p style={{color: 'white'}}>
                                            Company Focus
                                        </p>
                                    </NavLink> 
                                </div>
                            </Col>
                            <Col lg={2} sm={6}> 
                                <div>
                                    <NavLink to="/about-martin-spires">
                                        <p style={{color: 'white'}}>
                                            About Martin Spires
                                        </p>
                                    </NavLink> 
                                </div>
                            </Col>
                            <Col lg={2} sm={6}> 
                                <div>
                                    <NavLink to="/testimonials">
                                        <p style={{color: 'white'}}>
                                            Testimonials
                                        </p>
                                    </NavLink> 
                                </div>
                            </Col>
                            <Col lg={2} sm={6}> 
                                <div>
                                    <NavLink to="/contact">
                                        <p style={{color: 'white'}}>
                                            Enquiries
                                        </p>
                                    </NavLink> 
                                </div>
                            </Col>
                        </Row>
                        <hr style={{backgroundColor: 'white'}}/>
                        <Row> 
                            <Col lg={true}>
                                <p>
                                    Tel: +649 5331466
                                </p>
                            </Col>
                        </Row>
                        <Row> 
                            <Col lg={true}>
                                <p>
                                    Email: martin@martinspires.co.nz
                                </p>
                                
                            </Col>
                        </Row>
                        <Row> 
                            <Col lg={true}>
                                <p>
                                    Copyright © Sales Development Programs Ltd. All rights reserved.
                                </p>
                            </Col>
                        </Row>
                        <Route exact path="/" render={() => (
                            <Redirect to="/home"/>              
                        )} />
                    </Container>
                </div>
        )
    }
}