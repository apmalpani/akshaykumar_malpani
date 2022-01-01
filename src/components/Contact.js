import React, { Component } from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <a href='https://www.linkedin.com/in/akshaykumarmalpani/' target="_blank"><LinkedInIcon /></a> <br />
                <a href='https://www.facebook.com/akshaykumar.malpani' target="_blank"><FacebookIcon /></a> <br />
                <a href='https://www.instagram.com/akshaykumar_malpani/' target="_blank"><InstagramIcon /></a> <br />
                <a href='https://twitter.com/apmalpani' target="_blank"><TwitterIcon /></a> <br />
                <a href='https://www.youtube.com/channel/UCgRj_gFSDSrFBcLHPhgtG2Q' target="_blank"><YouTubeIcon /></a> <br />
                <a href='mailto:akshaykumar.malpani@gmail.com' target="_blank"><EmailIcon /></a> <br />
            </React.Fragment>
        );
    }
}