import React from 'react'
import { Container, Grid, Grow, Paper, Typography } from '@material-ui/core';
import FoodImages from '../MultipleImage/Foodimages';
import GitHubIcon from '@mui/icons-material/GitHub';
import FolderIcon from '@mui/icons-material/Folder';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Bharath from '../MultipleImage/Bharath';
import Imageres from '../MultipleImage/Imageres';
import Shopnow from '../MultipleImage/Shopnow';



const Projects = () => {
  return (
    <Grow in>
      <Container >
        <br></br><br></br><br></br><br></br>


        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={4}  >
            <Paper style={{ padding: '20px' }} elevation={6}  >
            <Typography variant="h4" >FoodAdviser</Typography>
              <p style={{ fontSize: '20px' }}>
                A Full Stack(MERN) application which is helpful for users for finding the best locality food which is
                famous in particular location.Users can add food items into wishlist, so that he can revisit them. Users
                can like,comment the food recepies.Users can add food items as a memory.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '20px' }} elevation={6}  >
              <h1><b> Project Results </b></h1>
                <FoodImages/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '20px' }} elevation={6}  >
              <h1><b> Project Details </b></h1>
              <i style={{ fontSize: '20px',marginRight:'225px' }} >Code  </i> <a href="https://github.com/Saideep278/FAapp"><GitHubIcon style={{color:'black'}}/></a> <br></br>
              <i style={{ fontSize: '20px' ,marginRight:'212px'}}>Report </i> <a href='https://docs.google.com/document/d/118t6KOzlxTWP5iwOqTPWDx7Bqp1yjr43/edit?usp=sharing&ouid=104132690252427287353&rtpof=true&sd=true'><FolderIcon style={{color:'black'}}/></a> <br></br>
              <i style={{ fontSize: '20px' ,marginRight:'222px'}}>Video </i> <a href='https://youtu.be/fRfD18_vkkA'><YouTubeIcon style={{color:'black'}}/></a> <br></br>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '20px' }} elevation={6}  >
              <Typography variant="h4" >BharathTimes9</Typography>
              <p style={{ fontSize: '20px' }}>
                A Django application which helps users to know daily breaking news and news about all the depart-
                ments.This web app deliver the real time news to the users. This website is built in Django framework
                and it is dynamic with the help of AJAX(JS).This web application is also completely done as MERN
                stack application as part of my MERN stack experience.
              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '20px' }} elevation={6}>
            <h1><b> Project Results </b></h1>
                <Bharath />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '20px' }} elevation={6}>
            <h1><b> Project Details </b></h1>
              <i style={{ fontSize: '20px',marginRight:'225px' }} >Code  </i> <a href="https://github.com/Saideep278/bharathtimes9news"><GitHubIcon style={{color:'black'}}/></a> <br></br>
              <i style={{ fontSize: '20px' ,marginRight:'222px'}}>Video </i> <a href='https://drive.google.com/file/d/1dcTD-ltRAks995rnw9JjPAl6Uya_tfsL/view?usp=share_link'><YouTubeIcon style={{color:'black'}}/></a> <br></br>
            
              </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '20px' }} elevation={6}  >
              <Typography variant="h4" >ImageRestoration using DeepLearning</Typography>
              <p style={{ fontSize: '20px' }}>
              A Desktop(tkinter) application for restoration of damaged imaged using deep learning technique’s.This application 
              uses GAN(Genrative Adveserial Netwrok) architecture of CNN. It uses genrative network and dicrimintor network for restoration of lost pixels.

              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '20px' }} elevation={6}>
            <h1><b> Project Results </b></h1>
                <Imageres/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '20px' }} elevation={6}>
            <h1><b> Project Details </b></h1>
              <i style={{ fontSize: '20px',marginRight:'225px' }} >Code  </i> <a href="https://github.com/Saideep278/ImageRestoration"><GitHubIcon style={{color:'black'}}/></a> <br></br>
              <i style={{ fontSize: '20px' ,marginRight:'212px'}}>Report </i> <a href='https://docs.google.com/document/d/1C2l0BCXXr95iCJOwphj4f8DK2UzU3a282OSs4mdTUYA/edit?usp=share_link'><FolderIcon style={{color:'black'}}/></a> <br></br>
              <i style={{ fontSize: '20px' ,marginRight:'222px'}}>Video </i> <a href='https://drive.google.com/file/d/1IeQBtjg5pDuukvLaDGH_e_-WXBrqR2el/view?usp=share_link'><YouTubeIcon style={{color:'black'}}/></a> <br></br>
            
              </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '20px' }} elevation={6}  >
              <Typography variant="h4" >ShopNow</Typography>
              <p style={{ fontSize: '20px' }}>
              A Web application with Machine Learning, built in django framework,where user can buy products related
                to different types of departments, can get recommendations(Content based and Collabrative filtering).User
                can add his desired products into the cart.

              </p>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '20px' }} elevation={6}>
            <h1><b> Project Results </b></h1>
              <Shopnow/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper style={{ padding: '20px' }} elevation={6}>
            <h1><b> Project Details </b></h1>
            <i style={{ fontSize: '20px',marginRight:'225px' }} >Code  </i> <a href="https://github.com/Saideep278/ShopNow1and2"><GitHubIcon style={{color:'black'}}/></a> <br></br>
              <i style={{ fontSize: '20px' ,marginRight:'212px'}}>Report </i> <a href='https://docs.google.com/document/d/1Bo81ibf6cPKwxDMb8j3x2wRaFxwDO6QE/edit?usp=share_link&ouid=104132690252427287353&rtpof=true&sd=true'><FolderIcon style={{color:'black'}}/></a> <br></br>
            
              </Paper>
          </Grid>
        </Grid>

      </Container>
    </Grow>
  )
}

export default Projects


