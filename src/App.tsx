import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import { NavRouting } from './components/nav-routing/nav-routing';
import { HomeComponent } from './views/home/home';
import Container from 'react-bootstrap/Container';
import CompanyFocus from './views/company-focus/company-focus';
import AboutComponent from './views/about/about';
require('dotenv').config();

interface Props {

}
class App extends React.Component<Props> {
  render() {
    return (
        <Router>
          <div> 
            <Navbar bg="light" expand="lg" sticky='top' >
            <Nav>
                <Link to="/" style={{fontSize: '1.5em', marginLeft: 40}}>Sales Development Programs Ltd</Link>
            </Nav>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse>
              <Nav className="ml-auto" style={{marginRight: 40}}>
                {/* <NavRouting routePath='/home' routeText='Home'/> */}
                <NavRouting routePath='/company-focus' routeText='Company Focus'/>
                <NavRouting routePath='/about-martin-spires' routeText='Martin Spires'/>             
                <NavRouting routePath='/contact' routeText='Testiomonials'/>
                <NavRouting routePath='/contact' routeText='Enquiries'/>                    
                                    
              </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Route exact path="/" render={() => (
              <Redirect to="/home"/>              
            )} />
              <Route path="/home/" component={HomeComponent} />
              <Route path="/company-focus/" component={CompanyFocus}/>
              <Route path="/about-martin-spires/" component={AboutComponent} />
          </div>
        </Router>
        
    );
  }
}

export default App;
