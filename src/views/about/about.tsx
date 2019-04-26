import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TitleComponent from '../../components/title/title';
import './about.css'

export default class AboutComponent extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <Row style={{marginTop: 50}}>
                    <Col lg={{offset: 2, span: 6}}> 
                        <TitleComponent title="martin spires" hrColor='black' alignment='left'/>
                    </Col>
                </Row>
                <Row style={{marginTop: 30}}>
                    {/* <Col lg={2}> 
                        <img src={require('../../assets/images/m1.png')}/>
                    </Col> */}
                    <Col lg={{offset: 2, span: 6}} style={{fontSize: 20}}> 
                        <p className='aboutHeaderText'>
                            Martin Spires is now regarded as the most successful and experienced Sales, Customer Service and Presentation Skills Trainer in the entirety of the Pacific Region.
                        </p>
                        <hr />
                        <p>
                        Martin Spires was a record-breaking Salesman from 1976 through to 1983 in the United Kingdom. Graduating from the University of Keele, UK in 1976, he went straight into the world of selling. After spending 1 year in Africa conducting voluntary work, he joined the "Daily Mail" as a Sales Executive. In 1979 Martin then joined the "Graduate Group" rising to become Sales Director by the age of 26 running a sales force of 40 personnel.
                        </p>
                        <p>
                        In 1983, Martin Spires came to Singapore as Training Director for "Asian Sales Training" (a division of the Institue of International Research) based in Singapore and then Jakarta.
                        </p>
                        <p>
                        In 1984 Sales Development Programs Pte Ltd was incorporated with Martin as its Managing Director. Within the first 2 weeks of business training programs were successfully implemented for companies such as Black & Decker and Van der Horst. Recently Martin has incorporated a sister company, Sales Development Programs Ltd, in Auckland, New Zealand.
                        </p>
                        <p>
                        From 1984 to the present the customer reference list of Martin Spires reads like the Fortune 500 of Asia/Pacific. The customer base covers New Zealand, Australia, SE Asia, Indian sub continent, Europe, USA, Japan and China. Martin Spires is now a global Corporate Trainer with an extensive customer base in Europe and the USA.
                        </p>
                    </Col>
                    <Col lg={2}> 
                        <img src={require('../../assets/images/m1.png')} style={{width: 300}}/>
                        <img src={require('../../assets/images/m3.jpg')}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}