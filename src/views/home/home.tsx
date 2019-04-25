import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col'; 
import './home.css';
import { BrowserRouter as Router, Route, Link, withRouter, NavLink, Redirect, RouteComponentProps } from "react-router-dom";
import Button from 'react-bootstrap/Button';
 
export class HomeComponent extends React.Component {
render() {
    return (
        <div>
          <Container fluid={true}>
              <Row>
                <Col lg={true} className='homeColumn'>
                    <div className='imageContainer'>
                        <p>Image Container</p>    
                    </div>  
                  
                </Col>
                <Col lg={true} className='homeColumn'>
                    <div className='descriptionContainer'>
                        <p>
                            hello
                        </p>
                    </div>
                </Col>
              </Row>
          </Container>          
        </div>
    )
  }
}

export default HomeComponent;
