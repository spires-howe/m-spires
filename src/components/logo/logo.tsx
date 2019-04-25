import React from 'react';
import './logo.css'

interface Props {
    logoPath: string;
    logoText: string
}
export default class logoComponent extends React.Component<Props> {
    render() {
        const path = this.props.logoPath;
        return (
            <div>
                <img style={{height: 100}} src={require('../../assets/logos/' + this.props.logoPath + '.png')} />
                <p className="logoText">{this.props.logoText}</p>
            </div>
        )
    }
}