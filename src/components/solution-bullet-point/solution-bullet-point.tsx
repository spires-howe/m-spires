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
                <Col lg={{span: 6, offset: 3}} className="leftColumn">
                    <div>
                        <ul className="listStyle">
                            <li className="bulletText">
                                <span>
                                    {this.props.firstBullet}
                                </span>
                            </li>
                            <li className="bulletText">
                                <span>
                                    {this.props.secondBullet}
                                </span>
                            </li>
                            <li className="bulletText">
                                <span>
                                    {this.props.thirdBullet}
                                </span>
                            </li>
                        </ul>
                    </div>
                </Col>
                {/* <Col lg={2}>
                    <div>
                        <ul>
                            <li className="bulletText">
                                {this.props.secondBullet}
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col lg={2} className="rightColumn">
                    <div>
                        <ul>
                            <li className="bulletText">
                                {this.props.thirdBullet}
                            </li>
                        </ul>
                    </div>
                </Col> */}
            </Row>
        )
    }
}