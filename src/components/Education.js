import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import VJTI from '../images/VJTI.jpg';
import deogiri from '../images/dc.jpg';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import GoogleIcon from '@mui/icons-material/Google';
import DirectionsIcon from '@mui/icons-material/Directions';

export default class Education extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={VJTI}
                            alt="VJTI"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Veermata Jijabai Technological Institute (VJTI), Mumbai
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                B.Tech. in Production Engineering
                            </Typography>
                            <Typography variant="h7" color="text.secondary">
                                (2013-2017)
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button>
                            <ThumbUpIcon />
                        </Button>
                        <Button>
                            <ThumbDownIcon />
                        </Button>
                        <Button>
                            <a href='https://vjti.ac.in/' target="_blank"> <OpenInBrowserIcon /> </a>
                        </Button>
                        <Button>
                            <a href='https://goo.gl/maps/uENiN18vmSEzhSwx9' target="_blank"> <DirectionsIcon /> </a>
                        </Button>
                    </CardActions>
                </Card> <br /> <br />
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={deogiri}
                            alt="Deogiri College"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Deogiri College, Aurangabad
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                                HSC
                            </Typography>
                            <Typography variant="h7" color="text.secondary">
                                (2011-2013)
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button>
                            <ThumbUpIcon />
                        </Button>
                        <Button>
                            <ThumbDownIcon />
                        </Button>
                        <Button>
                            <a href='http://deogiricollege.org/jr/' target="_blank"> <OpenInBrowserIcon /> </a>
                        </Button>
                        <Button>
                            <a href='https://goo.gl/maps/aBztPXvvgWrazWNi6' target="_blank"> <DirectionsIcon /> </a>
                        </Button>
                    </CardActions>
                </Card>
            </React.Fragment>
        );
    }
}