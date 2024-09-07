import { createTheme } from '@mui/material/styles';
import palette from "./palette";
import { getDirection,getFonts } from '../localization'
const theme = createTheme({
    palette: palette,
    direction:getDirection(),
    spacing:2.5,
    typography:{
        h1:{
            fontWeight:700,
            fontSize:getDirection()==='rtl'?50:52,
            lineHeight:"4rem",
            fontFamily:getFonts(),
            marginTop:15,
            color:"#fff",

        },
        h2:{
            fontWeight:700,
            fontSize:getDirection()==='rtl'?40:42,
            lineHeight:"3.2857rem",
            fontFamily:getFonts()
        },
        h3:{
            fontWeight:600,
            fontSize:getDirection()==='rtl'?30:32,
            lineHeight:"2.7rem",
            fontFamily:getFonts()
        },
        h4:{
            fontWeight:600,
            fontSize:getDirection()==='rtl'?26:28,
            lineHeight:"2.43rem",
            fontFamily:getFonts()

        },
        h5:{
            fontWeight:600,
            fontSize:getDirection()==='rtl'?20:22,
            lineHeight:"2.14rem",
            fontFamily:getFonts(),
            color:'#fff'
        }
        ,
        h6:{
            fontWeight:600,
            fontSize:getDirection()==='rtl'?16:18,
            lineHeight:"1.857rem",
            fontFamily:getFonts(),
            color:'#fff'
        },
        subtitle1:{
            fontWeight:400,
            fontSize:getDirection()==='rtl'?18:20,
            lineHeight:"2rem",
            fontFamily:getFonts(),
            marginTop:15
        },
        body1:{
            fontWeight:400,
            fontSize:getDirection()==='rtl'?16:18,
            lineHeight:'1.75rem',
            fontFamily:getFonts(),
            color:"#a4acc4"
        },
        body2:{
            fontWeight:600,
            fontSize:getDirection()==='rtl'?12:14,
            lineHeight:"1.8rem",
            fontFamily:getFonts(),
            color:"#a4acc4",
            textAlign:'center',

            letterSpacing:1
        },
        button:
            {
                fontWeight:400,
                fontSize:getDirection()==='rtl'?12:14,

                fontFamily:getFonts(),
                color:"#fff",
                letterSpacing:2

            }
    }
});
export default theme