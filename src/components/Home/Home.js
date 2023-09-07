import React from 'react'
import { Container, Grid, Grow, Paper, Typography } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import MultipleImage from '../MultipleImage/MultipleImage';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import profile from '../../media/logo.jpeg'

const Home = () => {
  return (
    <Grow in>
      <Container >
        <br></br><br></br><br></br><br></br>


        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6}  >
            <Paper style={{ padding: '25px' }} elevation={6}  >
              <h1><b>Hi,I'm Chakilam Saideep </b></h1>
              <p style={{ fontSize: '30px' }} >
                Seeking for a job to pursue a highly rewarding career and healthy work environment where I can utilize
                my skills and knowledge efficiently for the organizational and personal growth.
              </p>

            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '10px' }} elevation={6}  >
              <h1><b> Profile </b></h1>
              
              <img style={{borderRadius:'10px'}} src={profile}   alt="icon" height="200" width="320" />
              
            </Paper>
          </Grid>
        </Grid>


        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6}>
            <Paper style={{ padding: '10px' }} elevation={6}  >
              <h1><b> Connect </b></h1>
              <i style={{ fontSize: '20px',marginRight:'225px' }} >GitHub  </i> <a href="https://github.com/Saideep278"><GitHubIcon style={{color:'black'}}/></a> <br></br>
              <i style={{ fontSize: '20px' ,marginRight:'212px'}}>LinkedIn </i> <a href='https://www.linkedin.com/in/saideep-chakilam-90754a21b/'><LinkedInIcon style={{color:'black'}}/></a> <br></br>
              <i style={{ fontSize: '20px',marginRight:'250px' }}>Mail</i> <a href='mailto:saideepchakilam278@gmail.com'><EmailIcon style={{color:'black'}}/></a>
              
              <a style={{ textDecoration: 'none', color: 'black' }} href="https://drive.google.com/file/d/1XiASeBxXl3A-CAnRgIcfL6rnyZeiPgtY/view?usp=share_link">
                <h2><i>Resume</i></h2>
              </a>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper style={{ padding: '10px' }} elevation={6}>
              <MultipleImage/>
            </Paper>
          </Grid>
        </Grid>
        <br></br>
        
      </Container>
    </Grow>

  )
}

export default Home