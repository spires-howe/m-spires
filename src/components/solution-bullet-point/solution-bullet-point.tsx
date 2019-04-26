import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from '@material-ui/core/Icon';
import './solution-bullet-point.css'

interface Props {
    firstBullet: string,
    secondBullet: string,
    thirdBullet: string
}

export default class    SolutionBulletComponent extends React.Component<Props> {
    render(){
        return (
            <Row>
                <Col lg={{span: 2, offset: 3}} className="leftColumn">
                    <div>
                        <span className="bulletPoint">- </span>
                        <span className="bulletText">
                                {this.props.firstBullet}
                        </span>
                    </div>
                </Col>
                <Col lg={2}>
                    <div>
                        <span className="bulletPoint">- </span>
                        <span className="bulletText">
                                {this.props.secondBullet}
                        </span>
                    </div>
                </Col>
                <Col lg={2} className="rightColumn">
                    <div>
                        <span className="bulletPoint">- </span>
                        <span className="bulletText">
                                {this.props.thirdBullet}
                        </span>
                    </div>
                </Col>
            </Row>
        )
    }
}