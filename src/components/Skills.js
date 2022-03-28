import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Slider from '@mui/material/Slider';

export default class Skills extends Component {
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
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Java
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Slider defaultValue={90} step={10} marks min={10} max={100} disabled />
                <br />  <br />
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                               Spring - Boot
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Slider defaultValue={80} step={10} marks min={10} max={100} disabled />
                <br />  <br />
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Maven
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Slider defaultValue={80} step={10} marks min={10} max={100} disabled />
                <br />  <br />
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                ReactJS
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Slider defaultValue={90} step={10} marks min={10} max={100} disabled />
                <br />  <br />
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                React-Native
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Slider defaultValue={70} step={10} marks min={10} max={100} disabled />
                <br />  <br />
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                AWS
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Slider defaultValue={60} step={10} marks min={10} max={100} disabled />
                <br />  <br />
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                GraphQL
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Slider defaultValue={60} step={10} marks min={10} max={100} disabled />
                <br />  <br />
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Webservices (Rest)
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Slider defaultValue={70} step={10} marks min={10} max={100} disabled />
                <br />  <br />
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Python
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Slider defaultValue={70} step={10} marks min={10} max={100} disabled />
                <br />  <br />
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                SQL
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Slider defaultValue={90} step={10} marks min={10} max={100} disabled />
                <br />  <br />
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Agile / Scrum 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Slider defaultValue={90} step={10} marks min={10} max={100} disabled />
                <br />  <br />
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                GIT
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Slider defaultValue={80} step={10} marks min={10} max={100} disabled />
                <br />  <br />
            </React.Fragment>
        );
    }
}