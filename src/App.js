import React from "react";

import { CssBaseline } from "@mui/material";
import IndexScreeen from "./screens"
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@mui/styles';
import { getDirection } from "./localization";
import { ThemeProvider } from '@mui/material/styles';

import './App.css';
import theme from "./theme/theme";
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});
function App() {
    return getDirection()==='ltr'? (
       <ThemeProvider theme={theme}>
           <StylesProvider>
               <CssBaseline />
               <IndexScreeen />
           </StylesProvider>
       </ThemeProvider>
    ):(
        <ThemeProvider theme={theme}>
            <StylesProvider jss={jss}>
                <CssBaseline />
                <IndexScreeen />
            </StylesProvider>
        </ThemeProvider>
    );
}

export default App;
