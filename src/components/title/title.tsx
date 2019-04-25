import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import './title.css'


interface Props {
    title: string
    hrColor?: string;
    titleColor?: string;
    alignment: any;
}

export default class TitleComponent extends React.Component<Props> {
    render() {
        return (
            <div>
                <Row style={{marginTop: '20px', padding: 10}}>
                    <Col lg={true}>
                        <h2 style={{color: this.props.titleColor, letterSpacing: 10, textAlign: this.props.alignment}} className='headerText'>{this.props.title}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <hr style={{backgroundColor:this.props.hrColor}}></hr>
                    </Col>
                </Row>
            </div>
        )
    }
}
