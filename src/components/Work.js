import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import {  CardActionArea } from '@mui/material';
import siemens from '../images/Siemens.png';
import bofa from '../images/bofa.jpg';
import epam from '../images/epam.jpg';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default class Work extends Component {
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
              image={epam}
              alt="EPAM Anywhere"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Software Enginner at EPAM Anywhere
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Tech Stack: Java, ReactJS, Cloud, AWS
              </Typography>
              <Typography variant="h7" color="text.secondary">
                (Dec'21-present)
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> <br /> <br />
        <Card >
          <CardActionArea>
            <CardMedia
              component="img"
              image={bofa}
              alt="BofA"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Software Enginner at Bank of America
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Tech Stack: Java (Spring-Boot, Maven), ReactJS, Kafka
              </Typography>
              <Typography variant="h7" color="text.secondary">
                (July'17-Dec'21)
              </Typography>
            </CardContent>
          </CardActionArea>

        </Card> <br /> <br />
        <Card >
          <CardActionArea>
            <CardMedia
              component="img"
              image={siemens}
              alt="Blog 3"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Trainee at Siemens
              </Typography>
              <Typography variant="h7" color="text.secondary">
                (Jul'2016-Dec'2016)
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> <br /> <br />
      </React.Fragment>
    );
  }
}