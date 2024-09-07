import React from 'react';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { gettranslate } from '../localization';
import Title from '../components/title'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Outlinephone from '@mui/icons-material/PhoneOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import '../assets/css/main.css';
import Conatctform from '../components/conatctform';

const useStyles = makeStyles(theme => ({
  root: {
    hight: 'auto',
    zIndex: 11,
  },
  aboutstyle: {
    padding: '60px 60px 30px 30px'
  },
 btn:{
  '&:hover':{
    borderBottom:'2px solid #fff !important',   
}
 }
}))
export default function Contact() {
  const classes = useStyles()
  const translate = gettranslate()
  return (
    <Grid alignItems='flex-start' container className={classes.root}>
      <Grid item container xs={12} className={classes.aboutstyle}>
        <Title title={translate.contact} />
        <Grid container direction='row'>
          <Grid item xs={12} md={6} className={classes.imgabout}>
          <TextField margin='normal'    label="Enter your name*" color="info" fullWidth focused size='small' />
          <TextField margin='normal'    label="Enter your email*" color="info" fullWidth focused size='small' />
          <TextField margin='normal'    label="Enter your subject*" color="info" fullWidth focused size='small' />
          <TextField margin='normal'  multiline rows={5.3}  label="Enter your message*" color="info" fullWidth focused size='small' />
          <Button variant="contained" className={classes.btn} size="large" style={{ marginTop: '30px' }}>
            Send Mail
            </Button>
          </Grid>
          <Grid item xs={12} md={6} className={classes.informationbox}>
           <Conatctform icon={<InstagramIcon color='secondary' />} title='Instagram' desc='fateme._.moradiii__' />
           <Conatctform icon={<EmailOutlined color='secondary' />} title='Email' desc='fmoradi.soft@gmail.com' />
           <Conatctform icon={<LocationOnOutlinedIcon color='secondary' />} title='Adress' desc='Iran-tehran' />
          </Grid>
        </Grid>
      </Grid>


    </Grid>
  );
}
