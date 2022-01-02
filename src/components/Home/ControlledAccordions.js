import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Coder
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Full stack Developer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              Since last 5 years, I have written good amount of code in Java and Javascript. 
              I love working in ReactJS. I am currently exploring the Quantum Revolution and 
              trying to contribute in the same. <br />
              Have a look at my recent React native Android Project: 
              <a href='https://bit.ly/master_marathi_app' target="_blank">Click here </a>
              
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Writer</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            YourQuote Writer
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          I love writing quotes and have written it a lot on YourQuote App. 
          You can find most of my Quotes on Google.
          <a href='https://www.google.com/search?q=akshaykumar+malpani' target="_blank">Google me </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Traveller
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
              Travalled in 13+ of Indian states
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I love travelling, and have already visited a lot of places in India. 
            I love visiting places which have Historical Significance/Spiritual Importance.
            My fav Travel Destination so far was Hampi (Karnataka). 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Flautist
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
              Plays Flute
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I learnt to play flute and tried some beautiful songs to play on it. 
            Have a look at some of my trial videos here. 
            <a href='https://www.youtube.com/channel/UCgRj_gFSDSrFBcLHPhgtG2Q' target="_blank">YouTube</a>      
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Seeker
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
              Learnt a lot from Hindu Culture
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I have read some books of Hindu History. And, I am extremely motivated by the treasure underneath 
            those pages.  <br />
            Especially in case of Mahabharata book, the knowledge and wisdom we get is beyond imagination.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
