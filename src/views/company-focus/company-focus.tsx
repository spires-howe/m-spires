import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleComponent from '../../components/title/title';
import './company-focus.css';
import SolutionBulletComponent from '../../components/solution-bullet-point/solution-bullet-point';
import LogoComponent from '../../components/logo/logo'
import {b1, b2, b3, b4, b5, b6, b7, b8, b9, b10} from './constants';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { FooterComponent } from '../../components/footer/footer';

export default class CompanyFocus extends React.Component {
    render() {
        return (
            <div>
                <Container fluid={true}>
                    <Row style={{marginTop: 30}}>
                        <Col lg={{span: 6, offset: 3}}>
                            <TitleComponent title="Company Focus" alignment='left' hrColor='black'/> 
                        </Col>
                    </Row>
                    <Row style={{marginTop: 20}}>
                        <Col xl={{span: 6, offset: 3}}>
                            <div style={{marginTop: 30}}>
                                <p className='secondaryText' style={{fontSize: 23}}>
                                    Sales Development Programs Ltd provides training solutions to assist its customers to:
                                </p>
                            </div> 
                        </Col>
                    </Row>
                    <Row> 
                        <Col xl={{span:6, offset:3}}>
                            <hr style={{backgroundColor: '#1976d3'}}/>
                        </Col>
                    </Row>
                    <SolutionBulletComponent firstBullet={b8} secondBullet={b9} thirdBullet={b3}/>
                    <Row> 
                        <Col xl={{span:6, offset:3}}>
                            <hr style={{backgroundColor: '#1976d3'}}/>
                        </Col>
                    </Row>
                    <SolutionBulletComponent firstBullet={b4} secondBullet={b5} thirdBullet={b6}/>
                    <Row> 
                        <Col xl={{span:6, offset:3}}>
                            <hr style={{backgroundColor: '#1976d3'}}/>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col xl={{span:6, offset:3}} className="singleBullet"> 
                            <div>
                                <ul className="listStyle">
                                    <li className="bulletText">
                                        <span>
                                            {b1}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={{span:6, offset:3}} className="singleBullet"> 
                            <div>
                                <ul className="listStyle">
                                    <li className="bulletText">
                                        <span>
                                           {b2}     
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                   
                    <Row>
                        <Col xl={{span:6, offset:3}} className="singleBullet"> 
                            <div>
                                <ul className="listStyle">
                                    <li className="bulletText">
                                        <span>
                                            {b7}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={{span:6, offset:3}} className="singleBullet"> 
                            <div>
                                <ul className="listStyle">
                                    <li className="bulletText">
                                        <span>
                                            {b10}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row> 
                        <Col xl={{span:6, offset:3}}>
                            <hr style={{backgroundColor: '#1976d3'}}/>
                        </Col>
                    </Row>
                    
                    
                </Container>   
                <div className="areaContainer">
                    <Container>
                        <Row>
                            <Col lg={true}>
                                <div style={{marginTop: 30}}>
                                    <p className='secondaryText' style={{fontSize: 25, color: 'white', textAlign: 'center'}}>
                                        In order to achieve these business objectives in measureable terms, Sales Development Programs Ltd provides training programs in the following areas:
                                    </p>
                                </div> 
                                <hr style={{backgroundColor: 'white'}}/>
                            </Col>
                        </Row>
                        <Row style={{paddingTop: 20}}>
                            <Col lg={4}>
                                <div>
                                    <p className="areaText"><img src={require('../../assets/icons/medal.png')}/> Value - Based Selling Skills</p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div>   
                                    <p className="areaText"><img src={require('../../assets/icons/hand-shake.png')}/> Negotiating Skills</p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div>   
                                    <p className="areaText"><img src={require('../../assets/icons/education.png')}/> Presentations Skills</p>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{marginTop: 20, paddingBottom: 20}}> 
                            <Col lg={4}>
                                <div>
                                    
                                    <p className="areaText"><img src={require('../../assets/icons/support.png')}/> Customer Service Skills</p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div>   
                                    <p className="areaText"><img src={require('../../assets/icons/research.png')}/> Account Management Skills</p>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div>   
                                    <p className="areaText"><img src={require('../../assets/icons/avatar.png')}/> Train the Trainer</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div>
                    <Container>
                        <Row style={{marginTop: 20}}>
                            <Col lg={true}>
                                <TitleComponent title="track record" hrColor='black' alignment='left'/>
                            </Col> 
                        </Row>
                        <Row>
                            <Col lg={true}>
                                <p style={{fontSize: 15}}>Over the 22 years Sales Development Programs Ltd has provided in-house training for a huge range of companies, such as:</p>
                            </Col>
                        </Row>
                        <div style={{textAlign: 'center', marginTop: 20}}>
                            <Row>
                                <Col sm={6} md={6} lg={3}>
                                    <LogoComponent logoPath='abb' logoText='ABB Group'/>
                                </Col>
                                <Col sm={6} md={6} lg={3}>
                                    <LogoComponent logoPath='singtel' logoText='Singtel'/>
                                </Col>
                                <Col sm={6} md={6} lg={3}>
                                    <LogoComponent logoPath='nissan' logoText='Nissan'/>
                                </Col>
                                <Col sm={6} md={6} lg={3}>
                                    <LogoComponent logoPath='ikea' logoText='Ikea'/>
                                </Col>
                            </Row> 
                        </div>
                        <div style={{textAlign: 'center', marginTop: 20}}>
                            <Row>
                                <Col sm={6} md={6} lg={3}>
                                    <LogoComponent logoPath='dhl' logoText='DHL'/>
                                </Col>
                                <Col sm={6} md={6} lg={3}>
                                    <LogoComponent logoPath='shell' logoText='Shell Global Solutions'/>
                                </Col>
                                <Col sm={6} md={6} lg={3}>
                                    <LogoComponent logoPath='dbs' logoText='DBS Bank'/>
                                </Col>
                                <Col sm={6} md={6} lg={3}>
                                    <LogoComponent logoPath='volvo' logoText='Volvo Cars'/>
                                </Col>
                            </Row> 
                        </div>
                        <div style={{textAlign: 'center', marginTop: 20}}>
                            <Row>
                                <Col sm={6} md={4} lg={3}>
                                    <LogoComponent logoPath='nokia' logoText='Nokia'/>
                                </Col>
                                <Col sm={6} md={4} lg={3}>
                                    <LogoComponent logoPath='ncr' logoText='NCR Corporation'/>
                                </Col>
                            </Row> 
                        </div>
                        <hr />
                        <div style={{marginTop: 20}}>
                            <Row>
                                <Col md={6} lg={4}>
                                    <ul className="extraCompanyList">
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Maersk Sealand
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Panalpina
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Kuehne & Nagel
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Hapag Lloyd
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> ABX Logistics
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> BAX Global
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Vetco Gray
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Baker Oil Tools
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Flowserve
                                        </li>
                                    </ul>
                                </Col>
                                <Col md={6} lg={4}> 
                                    <ul className="extraCompanyList">
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Westinghouse
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Atlas Copco
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Omron
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Yokogawa
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> P&O nedlloyd
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Degussa
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> ITT Industries
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> MTU
                                        </li>
                                    </ul>
                                </Col>
                                <Col md={6} lg={4}> 
                                    <ul className="extraCompanyList">
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> George Kent
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Ingersoll Rand
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> OCBC
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Schlumberger
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Robert Bosch
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Deutz - MWM
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Abacus International
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> WR Grace
                                        </li>
                                        <li className="extraCompanyText"> 
                                            <span style={{fontSize: 25, color: '#1976d3'}}>-</span> Sumitomo
                                        </li>
                                        
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
                <FooterComponent />
            </div>   

        )
    }

}