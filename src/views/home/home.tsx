import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import './home.css';
import { BrowserRouter as Router, Route, Link, withRouter, NavLink, Redirect, RouteComponentProps } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
 
export class HomeComponent extends React.Component {
render() {
    return (
        <div>
          <Container fluid={true}>
              <Row>
                <Col lg={4} className='homeColumn'>
                    <div className='imageContainer'>
                        <div style={{marginTop: 300}}>
                            <p className="brandText">
                                Sales Development Programs Ltd
                            </p> 
                            <hr style={{background: 'white', width: '75%'}}/>
                            <p className="homeSecondary">
                                +649 5331466
                            </p>
                            <p className="homeSecondary">
                                martin@martinspires.co.nz
                            </p>
                        </div>
                    </div>  
                  
                </Col>
                <Col lg={{offset: 1, span: 6}} className='homeColumn'>
                    <div className='descriptionContainer'>
                        <div className="bannerBorder">
                            <p className="descriptionText">
                                Sales Development Programs Ltd was incorporated in Singapore in June 1984. The founder of the company was 
                                <NavLink to="/about-martin-spires" style={{fontSize: 22, marginLeft: 5, marginRight: 5, color: '#1976d3', textDecoration: 'underline'}}>
                                     Martin Spires
                                </NavLink>
                                who is the principal trainer within the organization.
                            </p>
                            <p className="descriptionText">
                                Martin had previously worked for another Singapore based sales training organization. Prior to that, he was the Sales Director for a major UK organization.
                            </p>
                        </div>
                        <hr />
                    </div>
                    <ButtonToolbar style={{paddingLeft: 10, marginBottom: 20}}>
                        <NavLink to="/about">
                            <Button variant="outline-primary">Learn More</Button>
                        </NavLink>
                        <NavLink to="/contact"> 
                            <Button variant="outline-primary" style={{marginLeft: 20}}>Enquiries</Button>
                        </NavLink>
                    </ButtonToolbar>
                </Col>
              </Row>
          </Container>          
        </div>
    )
  }
}

export default HomeComponent;
