import React,{useState,useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import '../assets/css/main.css';

const useStyles = makeStyles(theme => ({
    root: {
padding:theme.spacing(3)
    },
    aboutstyle: {
        padding: '60px 60px 30px 30px'
    },
    progress:{
        backgroundColor:'#2e344e',
        height:6
    }
}))

export default function Progress({value,title}) {
    const [val, setval] = useState(0);
    useEffect(() => {
       setTimeout(()=>{
        //    if(val===value){
        //        return
        //    }
           setval(value)
       },300)
      }, []);
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Typography variant='h6'>
             {title}
            </Typography>
            <Grid container justifyContent='center' alignItems='center' direction='row'>
                <Grid item xs={2} md={2} lg={1} className={classes.imgabout}>
                    <Typography variant='body1'>
                        {value}%
                    </Typography>
                </Grid>
                <Grid item xs={10} md={10} lg={11}  className={classes.imgabout}>
                    <LinearProgress color='primary' className={classes.progress} variant="determinate" value={val} />

                </Grid>


            </Grid>

        </div>
    );
}
