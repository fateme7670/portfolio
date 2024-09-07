import React,{useEffect,useState} from 'react';
import Portfoliocomponent from '../components/Porfolio';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import { gettranslate } from '../localization';
import Loadingloader from '../components/loadingloader';

const useStyles = makeStyles(theme => ({
  root: {
    hight: 'auto',
    zIndex: 11,
  },
  
}))

export default function Portfolio() {
  const classes = useStyles()
  const translate = gettranslate()
  const [loader,setLoader]=useState(true)

  useEffect(() => {
    setTimeout(()=>{
    const  image=[]
      setLoader(false)
    },2000)
  }, []);
  return (
    <Grid alignItems='flex-start' container className={classes.root}>
{loader ? (
<>
<Loadingloader />
<Loadingloader />
<Loadingloader />
<Loadingloader />
<Loadingloader />
<Loadingloader />
 
</>

):(

  translate.image.map((img)=>
    <Portfoliocomponent key={img.id} image={img.image} title={img.title} desc={img.desc}  />
)
)}


    </Grid>

  );
}
