import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpg';
import b3 from '../images/b3.jpg';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';


export default class Blogs extends Component {
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
                            image={b1}
                            alt="Blog 1"
                        />
                    </CardActionArea>
                    <CardActions>
                        <Button>
                            <ThumbUpIcon />
                        </Button>
                        <Button>
                            <ThumbDownIcon />
                        </Button>
                        <Button>
                        <a href='https://www.linkedin.com/pulse/future-quantum-computing-10-akshaykumar-malpani/' target="_blank"> <OpenInBrowserIcon /> </a>
                        </Button>
                    </CardActions>
                </Card> <br /> <br />
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={b2}
                            alt="Blog 2"
                        />
                    </CardActionArea>
                    <CardActions>
                        <Button>
                            <ThumbUpIcon />
                        </Button>
                        <Button>
                            <ThumbDownIcon />
                        </Button>
                        <Button>
                        <a href='https://www.linkedin.com/pulse/future-quantum-computing-20-akshaykumar-malpani/' target="_blank"> <OpenInBrowserIcon /> </a>
                        </Button>
                    </CardActions>
                </Card> <br /> <br />
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={b3}
                            alt="Blog 3"
                        />
                    </CardActionArea>
                    <CardActions>
                        <Button>
                            <ThumbUpIcon />
                        </Button>
                        <Button>
                            <ThumbDownIcon />
                        </Button>
                        <Button>
                        <a href='https://www.linkedin.com/pulse/future-quantum-computing-30-akshaykumar-malpani/' target="_blank"> <OpenInBrowserIcon /> </a>
                        </Button>
                    </CardActions>
                </Card> <br /> <br />
            </React.Fragment>
        );
    }
}