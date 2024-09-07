import React from 'react'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import '../assets/css/main.css'
const useStyles=makeStyles(theme=>({
  root:{
position:'relative',
height:70,
width:'100%',
marginBottom:60
  },
        title:{
            position: 'relative',
          lineHeight: 100,
          width: '100%',
          "&::after":{
            content: "''",
            position: 'absolute',
            left: 0,
            right:0,
            top: 'auto',
            bottom: 0,
            height: 5,
            borderRadius: 100,
            width: 35,
            background: '#037fff',
       
         
          },
          "&::before":{
            content: "''",
            position: 'absolute',
            left: 0,
            right:0,
            top: 'auto',
            bottom: 0,
            height: 5,
            borderRadius: 100,
            width: 100,
            background: 'rgba(3,127,255,.3)',
        
          }
        },
        subtitle:{
            fontSize:'4.5rem',
            position:'absolute',
            left:0,
            top:'100%',
            lineHeight:"1rem",
            fontWeight:900,
            color:'rgba(25,29,43,.44)',
            display:'inline-block',
            zIndex:-1,
            transform:'translateY(-40%)'
        }
     
    
      }))
export default function Title({title}) {
    const classes=useStyles()
  return (
    <div className={classes.root} >
      <Typography className='title' variant='h2'>
      {title}
      </Typography>
      <span className={classes.subtitle}>      {title}</span>
    </div>
  );
}
