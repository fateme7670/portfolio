import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { gettranslate } from '../localization';
import Title from '../components/title';
import Progress from '../components/progress';
import Stepperscreen from '../components/stepperscreen';

const useStyles = makeStyles(theme => ({
  root: {
    hight: 'auto',
    zIndex: 11,
  },
  aboutstyle: {
    padding: '60px 60px 30px 30px'
  },
  styudytstyle: {
    padding: '5px 60px 30px 30px'
  },

}))
export default function Resume() {
  const classes = useStyles()
  const translate = gettranslate()
  return (
    <Grid alignItems='flex-start' container className={classes.root}>
      <Grid item container xs={12} className={classes.aboutstyle}>
        <Title title='MY SKILLS' />
        <Grid container direction='row'>
          <Grid item xs={12} md={6} className={classes.imgabout}>
            <Progress title='html' value='100' />
            <Progress title='css' value='100' />
            <Progress title='Java script' value='80' />
            <Progress title='Next.js' value='90' />
            <Progress title='Type script' value='90' />
            <Progress title='Tailwind' value='85' />

          </Grid>
          <Grid item xs={12} md={6} className={classes.informationbox}>
            <Progress title='solidity' value='90' />
            <Progress title='php' value='70' />
            <Progress title='React.js' value='90' />
            <Progress title='Socket.io' value='90' />
            <Progress title='Redux' value='85' />
          </Grid>
        </Grid>
      </Grid>
      <Grid item container xs={12} className={classes.aboutstyle}>
        <Title title={translate.resume} />
        <Typography variant='h4'>Experience</Typography>
        <Grid item container xs={12} >
        <Stepperscreen steps={translate.experience} />
</Grid>

      </Grid>
      <Grid item container xs={12} className={classes.styudytstyle}>
      <Typography variant='h4'>Study</Typography>
        <Grid item container xs={12} >
        <Stepperscreen steps={translate.study} />

</Grid>
      </Grid>

    </Grid>
  );
}
