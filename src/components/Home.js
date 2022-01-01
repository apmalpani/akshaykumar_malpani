import React, { Component } from 'react';
import apm from '../images/APM.jpg';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ControlledAccordions from './Home/ControlledAccordions';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom component="div">
                    Hello World, thanks for visiting<br />
                    I am Akshaykumar Malpani (Full stack developer) <br /> with 4.5+ years of experience
                </Typography>
                <img src={apm} width={200}
                    style={{ borderRadius: 10, objectFit: 'contain'}}
                >
                </img>
                <ControlledAccordions />
            </React.Fragment>
        );
    }
}