import React from 'react';
import '../assets/css/home.css'
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Twitter from '@mui/icons-material/Twitter';
import { gettranslate } from '../localization';
import { IconButton } from '@mui/material';

const useStyles = makeStyles(theme => ({
  root: {
    hight: 'auto',   
    width: '100%',
    overflow:'hidden'
  },
  title: {
    color: theme.palette.primary.main,
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'inline-block'
    }
  },
  contenthome: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: "column !important",
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    overflow: 'hidden'

  },
  hometxt: {
    display: 'block'
  },
  socialbtn:{

    margin:10
  }

}))

export default function Home() {
  const classes = useStyles()
  const translate = gettranslate()
  return (
    <div className={classes.root}>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <Grid className={classes.contenthome}>
        <Typography variant='h1'>{translate.hi} <span className={classes.title}>{translate.name}</span>{translate.hi2}</Typography>
        <Typography className={classes.hometxt} variant='subtitle1'>{translate.desc}</Typography>

    <Grid direction='row' item xs={12} lg={12} md={12}>
      <IconButton href='https://www.instagram.com/fateme._.moradii__?igsh=MWtqcWsydGNwaGo0OQ==' className={classes.socialbtn}>
      <Instagram  color="secondary"  />
      </IconButton>
      <IconButton className={classes.socialbtn}>
        <LinkedIn  color="secondary"  />
        </IconButton>
        <IconButton className={classes.socialbtn}>
        <Twitter  color="secondary"  />
        </IconButton>
    </Grid>
      </Grid>
      {/* <IconButton style={{background:'#fff'}} > */}
      {/* <DeleteIcon style={{color:'#fff'}} /> */}
      {/* </IconButton> */}

    </div>
  );
}


