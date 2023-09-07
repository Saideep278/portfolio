import React from 'react'
import { Container, Grid, Grow, Paper, Typography } from '@material-ui/core';

const About = () => {
  return (
    <Grow in>
      <Container >
        <br></br><br></br><br></br><br></br>

        <h1><b>Education </b></h1>


        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '10px' }} elevation={6}  >
            <i style={{ fontSize: '20px' }} >B.Tech (IT) at Chaitanya Bharathi Institute of Technology</i>

            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '10px' }} elevation={6}>
              <b>2020 - present</b> 

            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '10px' }} elevation={6}>
              9.10 
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '10px' }} elevation={6}  >
            <i style={{ fontSize: '20px' }}>Intermediate (M.P.C) at Sri Chaitanya Junior College </i>

            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '10px' }} elevation={6}>
              <b>2017 - 2019 </b>

            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '10px' }} elevation={6}>
              9.76
            </Paper>
          </Grid>
        </Grid>


        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '10px' }} elevation={6}  >
            <i style={{ fontSize: '20px' }}>Class 10th at S.R.K Techno School</i>

            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '10px' }} elevation={6}>
              
              <b>2017</b>

            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '10px' }} elevation={6}>
              9.50
            </Paper>
          </Grid>
        </Grid>

        <h1><b>Skills</b></h1>

        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={6}>
            <Paper style={{ padding: '10px' }} elevation={6}  >
            <h3>Languages</h3> <br></br>
            <h3>Web Development</h3> <br></br> <br></br> 
            <h3>Leadership Skills</h3>  <br></br>
            <h3>Strengths</h3> 
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper style={{ padding: '10px' }} elevation={6}>
            C,Python,Java,MySQL,SQLite<br></br> <br></br>
            HTML,CSS,ReactJS,NodeJS,ExpressJS, <br></br>
            MogoDB,JS,Bootstrap,Django<br></br> <br></br>
            Placement Coordinator,SSFY President,<br></br> 
            Held as a volunteer at  ZPHS <br></br> <br></br> 
            Perseverance,Adaptable,Multitasking,Consistent
            </Paper>
          </Grid>
        </Grid>



      </Container>
    </Grow>
  )
}

export default About