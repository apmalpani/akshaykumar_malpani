import React, { Component } from 'react';
import apm from '../images/APM.jpg';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    This is Home
                    <img src={apm} width={100}
                        style={{ borderRadius: 10, objectFit: 'contain' }}
                    >
                    </img>
                </div>
            </React.Fragment>
        );
    }
}