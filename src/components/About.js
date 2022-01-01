import React, { Component } from 'react';
import MuiImageSlider from 'mui-image-slider';
import a1 from '../images/1.jpg';
import a2 from '../images/2.jpg';
import a3 from '../images/3.jpg';
import a4 from '../images/4.jpg';
import a5 from '../images/5.jpg';
import a6 from '../images/6.jpg';
import a7 from '../images/7.jpg';
import a8 from '../images/8.jpg';
import a9 from '../images/9.jpg';
import a10 from '../images/10.jpg';
import a11 from '../images/11.jpg';
import Typography from '@mui/material/Typography';

export default class About extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        const images = [
            a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11
        ];
        return (
            <React.Fragment>
               <Typography variant="h6" gutterBottom component="div">
                   Some of my Favourite Pics from various places
                </Typography>
                <MuiImageSlider component="div" images={images} />
            </React.Fragment>
        );
    }
}