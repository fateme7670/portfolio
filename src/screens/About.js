import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { gettranslate } from '../localization';
import Title from '../components/title'
import Imgprofile from '../assets/img/IMG_1034.JPG'
import Button from '@mui/material/Button';
import Service from '../components/service';
import Phonelink from '@mui/icons-material/Phonelink';
import TabletMac from '@mui/icons-material/TabletMac';
 
import Code from '@mui/icons-material/Code';
const useStyles = makeStyles(theme => ({
  root: {
    hight: 'auto',
    zIndex: 11,
  },
  aboutstyle: {
    padding: '60px 60px 30px 30px'
  },
  imgabout: {
    position: 'relative',
    height: '340px',



    "&::after": {
      content: "''",
      position: 'absolute',

      right: '20%',

      bottom: 0,
      height: '75%',

      width: 15,
      background: 'rgba(3,127,255,.6)',


    },
    "&::before": {
      content: "''",
      position: 'absolute',
      left: 0,

      top: 'auto',

      height: '70%',

      width: 15,
      background: 'rgba(3,127,255,.6)',

    }
  },
  title: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  information: {
    minWidth: '90px',
    display: 'inline-block'
  },
  informationbox: {
    padding: '0',
    marginTop: 50,
    [theme.breakpoints.up('md')]: {
      padding: '0 30px !Important',
      marginTop: 0
    }
  },
  // btn:{
  //   border:'1px solid  #2e344e',
  //   borderRadius:100,
  
  //   padding:theme.spacing(2),
  //   width:100,
  //   height:100
  // }
}))
export default function About() {
  const classes = useStyles()
  const translate = gettranslate()
  return (
    <Grid alignItems='flex-start' container className={classes.root}>
      <Grid item container xs={12} className={classes.aboutstyle}>
        <Title title={translate.about} />
        <Grid container direction='row'>
          <Grid item xs={12} md={5} className={classes.imgabout}>
            <img src={Imgprofile} alt={translate.name} width='80%' height='380px' />
          </Grid>
          <Grid item xs={12} md={7} className={classes.informationbox}>
            <Typography variant='h3'>{translate.hi} <span className={classes.title}>{translate.name}</span>{translate.hi2}</Typography>
            <Typography className={classes.hometxt} variant='body1'>{translate.desc}</Typography>

            <Typography variant='body1' marginTop='10px'>
              <b className={classes.information}>{translate.FullName}</b>
              {' : '}
              {translate.name}
            </Typography>
            <Typography variant='body1' marginTop='5px'>
              <b className={classes.information}>{translate.Age}</b>
              {' : '}
              27
            </Typography>
            <Typography variant='body1' marginTop='5px'>
              <b className={classes.information}>{translate.Nationality}</b>
              {' : '}
              {translate.iranian}
            </Typography>
            {/* <Typography variant='body1' marginTop='5px'>
              <b className={classes.information}>{translate.Languages}</b>
              {' : '}
              {translate.persian},{translate.english}
            </Typography> */}
            {/* <Typography variant='body1' marginTop='5px'>
              <b className={classes.information}>{translate.Phone}</b>
              {' : '}
              +98(90135****)
            </Typography> */}
            <Button variant="contained" size="large" style={{ marginTop: '30px' }}>
              {translate.downloadcv}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} className={classes.aboutstyle}>
        <Title title={translate.services} />
       
       
 <Service icon={ <Phonelink color="primary" className={classes.btn} fontSize="large"/>} title='Web developer' desc='Develope kind of website with React.js or Next.js or other language.'/>
 <Service   icon={ <Code color="primary" className={classes.btn} fontSize="large"/>} title='Programmer' desc=' I develope the website and application With React.js or Next ect.'/>

        <Service   icon={ <TabletMac color="primary" className={classes.btn} fontSize="large"/>} title='Web application' desc='React.js and next.js or vite can help to develope web application.'/>
  

      </Grid>
 
    </Grid>
  );
}
