import React,{useState} from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import '../assets/css/main.css';


const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,

  },
  main: {
    display: 'flex',  
    flexWrap: 'wrap',
    padding: theme.spacing(8),
    transition: '1s',
    '&:hover': {
      borderTopColor: theme.palette.primary.main,
      transition: '1s'
    },
    
    },
    boximg:{
height:250,
width:'100%',
    },
    image:{
        width:'100%',
        height:'100%'
    },
    modal:{
        width:'40%',
        height:'50%',
        display:'flex',
        margin:'auto',
        textAlign:'center'
    }
  }))
export default function Portfoliocomponent({image,title,desc}) {
  const classes = useStyles()
  const [open, setopen] = useState(false);
  return (
      <>
  
    <Grid item lg={4} md={4} xs={12} className={classes.root}>
   <Grid container className={classes.main} direction='column' alignItems='flex-start'>
 <div className={classes.boximg}> 


<img onClick={()=> setopen(true)} className={classes.image} src={image} alt={title} />
</div>
        <Typography  paddingTop={8} variant='h6'>
     { title}
        </Typography>
        <Typography className={classes.desc} variant='body1'>
  { desc}
        </Typography>
      </Grid>
    </Grid>
    <Modal
        open={open}
        onClose={  ()=> setopen(false)}
 className={classes.modal}
      >
          <img className={classes.image} src={image} alt={title} />
          </Modal>
    </>
  );
}
