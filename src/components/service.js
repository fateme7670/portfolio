import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import '../assets/css/main.css';
 

import IconButton from '@mui/material/IconButton';

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,

  },
  main: {
    background: '#191d2b',

    border: '1px solid #2e344e',
    borderTop: '5px solid #2e344e',

    padding: theme.spacing(8),
    transition: '1s',
    '&:hover': {
      borderTopColor: theme.palette.primary.main,
      transition: '1s'
    },
    
    },

  }))
export default function Service({title,desc,icon}) {
  const classes = useStyles()
  return (
    <Grid item lg={4} md={4} xs={12} className={classes.root}>
   <Grid container className={classes.main} direction='column' alignItems='flex-start'>
   <IconButton >
  {icon }
     </IconButton> 
 
        <Typography className='titleservice' variant='h5'>
        {  title}
        </Typography>
        <Typography className={classes.desc} variant='body1'>
    {     desc}
        </Typography>
      </Grid>
    </Grid>
  );
}
