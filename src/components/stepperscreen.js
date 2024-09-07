import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { StepConnector } from '@mui/material';
import Grid from '@mui/material/Grid';
import '../assets/css/main.css'

const useStyles = makeStyles(theme => ({
  stepperIcon: {
    width: 18,
    height: 18,
    border: '5px solid #2e344e',
    borderRadius: "1000%",
    padding:  '0px !important',
    marginLeft: 3,
    position: 'relative',
   
  },
  stepConnector: {

    paddingBottom: 0,
    "& span": {
      borderLeft:
        "3px solid #2e344e",

    }
  },

  stepcontent: {
    borderLeft: '3px solid #2e344e !important'
  },
  steplabel: {
    padding: '0px !important'
  },
  date: {
    color: theme.palette.secondary.main
  },

  title: {
    color: theme.palette.primary.main,
    position:'relative',
    paddingLeft:theme.spacing(12),
    "&::before":{
      content:"''",
      position:'absolute',
      width: 20,
      height: 1,
      top:'50%',
      left:'0%',
      background: '#2e344e',
    display:'inline-block'
    }
  },
  desccontent:{
    paddingLeft:theme.spacing(12),
  },
 
  subtitle:{
    paddingLeft:theme.spacing(12),
  },
  boxstyle:{
    justifyContent:'flex-start',
    textAlign:'left'
  },
  boxcontainer:{
    width:'100%',
     flex:1,
      display:'flex',
       justifyContent:'center',
        alignItems:'center'
  }
}))
const steps = [];

export default function StepperScreen({steps}) {
  const classes = useStyles()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Stepper orientation="vertical">
        {steps.map((step) => step.id >= 0 ? (
          <Step connector={<StepConnector className={classes.stepConnector} />} active={true} key={step.id}>
            <StepLabel className={classes.steplabel} icon={<span className={classes.stepperIcon}></span>} >

              <Grid container spacing={2} className={classes.boxcontainer}>
                <Grid item lg={2} md={2} xs={12} className={classes.boxstyle}>
                 
                  <Typography variant='h6' className={classes.date}>{step.date}</Typography>
                </Grid>
                <Grid item lg={10} md={10} xs={12} className={classes.boxstyle}>
                <span className={classes.line}></span>
                  <Typography className={classes.title} variant='h5'>
                    {step.title}

                  </Typography>
                </Grid>
              </Grid>
            </StepLabel>
            <StepContent className={classes.stepcontent}>


              <Grid container spacing={2} width='100%' flex={1} display='flex' justifyContent='flex-start'>
                <Grid item lg={2} md={2} xs={12} className={classes.boxstyle}>

                </Grid>
                <Grid item lg={10} md={10} xs={12}className={classes.boxstyle}>
                  <Typography variant='h6' className={classes.subtitle}>{step.subtitle}</Typography>
                  <Typography variant='body1'  className={classes.desccontent}>{step.desc}</Typography>

                </Grid>
              </Grid>
            </StepContent>
          </Step>) : (<Step active={true} key={step.id}>

            <StepLabel icon={<span></span>} >

            </StepLabel>

          </Step>)
        )}
      </Stepper>

    </Box>
  );
}
