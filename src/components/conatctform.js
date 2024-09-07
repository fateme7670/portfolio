import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import '../assets/css/main.css';
 



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
    btnstyle:{
        border:'1px solid #2e344e',
        padding:theme.spacing(5),
        display:'flex',
        justifyContent:'center',
        width:50,
    
       
        
    },
    desc:{
        cursor:'pointer',
        '&:hover':{
            color:theme.palette.primary.main
        }
    },
  }))
export default function Contactform({title,desc,icon}) {
  const classes = useStyles()
  return (
    <Grid item  className={classes.root}>
  
  
 <Grid container className={classes.main} direction='row' alignItems='center' justifyContent='flex-start'>
  
 <Grid item xs={12} md={2}>
   <div className={classes.btnstyle}>
  {icon }
     </div> 
 </Grid>
       
        <Grid item xs={12} md={10}>
       
        <Typography className={classes.titles}  variant='h6'>
        {  title}
        </Typography>
        <Typography className={classes.desc} variant='body1'>
    {desc}
        </Typography>
        </Grid>
 
      </Grid>
    </Grid>
  );
}
