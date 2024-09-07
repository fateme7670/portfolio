import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Imgprofile from '../assets/img/me.jpg'
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import HomeScreen from './Home';
import AboutScreen from './About';
import ContactScreen from './Contact';
import ResumeScreen from './Resume';
import PortfolioScreen from './Portfolio';
import { gettranslate, changeLanguage, lang } from '../localization';
import '../assets/css/main.css';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh'
  },
  Topdrower: {
    width: '100%',

    padding: "20px",
    borderBottom: "1px solid #2e344e",
    textAlign: 'center'
  },
  imgpro: {
    width: 220,
    height: 200,
    maxWidth: '100%',
    border: "7px solid #2e344e",
    verticalAlign: 'middle',
    borderRadius: '100%'
  },
  drowepaper: {
    backgroundColor: '#f00'

  },
  mainmenu: {
    textAlign: "center",

  },
  menudrower: {
    height: "100vh",
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  listmenu: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

  },
  bottommenu: {
    textAlign: "center",
    borderTop: "1px solid #2e344e",
    width: '100%',
    padding: '15px 0',
    marginBottom: 0
  },
  contentweb: {
    flexGrow: 1,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    position: 'relative',


  }
}))
// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [page, setPage] = useState(0);
  const classes = useStyles()
  const translate = gettranslate()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (

    <div className={classes.menudrower}>
      {/* <div className={classes.Topdrower}>
        <img src={Imgprofile} className={classes.imgpro} alt={translate.name} />
      </div> */}
      <div className={classes.listmenu}>
        <List style={{ width: '100%' }}>

          <ListItemButton className={page === 0 ? null : 'listitem'} style={{ background: page === 0 ? '#037fff' : 'transparent' }} onClick={() => { setPage(0); setMobileOpen(false) }}>

            <ListItemText  className={classes.mainmenu} disableTypography={true} children={<Typography style={{ color: page === 0 ? '#fff' : '#a4acc4' }} className='listitemtxt' variant='body2'> {translate.home}</Typography>} />
            <div className='overlay'></div>
          </ListItemButton>


          <ListItemButton className={page === 1 ? null : 'listitem'} style={{ background: page === 1 ? '#037fff' : 'transparent' }} onClick={() => { setPage(1); setMobileOpen(false); console.log(page) }}>

            <ListItemText  className={classes.mainmenu} disableTypography={true} children={<Typography className='listitemtxt' style={{ color: page === 1 ? '#fff' : '#a4acc4' }} variant='body2'> {translate.about}</Typography>} />
            <div className='overlay'></div>
          </ListItemButton>

          <ListItemButton className={page === 3 ? null : 'listitem'} style={{ background: page === 3 ? '#037fff' : 'transparent' }} onClick={() => { setPage(3); setMobileOpen(false) }}>

            <ListItemText className={classes.mainmenu} disableTypography={true} children={<Typography  style={{ color: page === 3 ? '#fff' : '#a4acc4' }} className='listitemtxt' variant='body2'> {translate.portfolies}</Typography>} />
            <div className='overlay'></div>
          </ListItemButton>


          <ListItemButton className={page === 4 ? null : 'listitem'} style={{ background: page === 4 ? '#037fff' : 'transparent' }} onClick={() => { setPage(4); setMobileOpen(false) }}>

            <ListItemText  className={classes.mainmenu} disableTypography={true} children={<Typography className='listitemtxt' style={{ color: page === 4 ? '#fff' : '#a4acc4' }} variant='body2'> {translate.resume}</Typography>} />
            <div className='overlay'></div>
          </ListItemButton>


          <ListItemButton className={page === 2 ? null : 'listitem'} style={{ background: page === 2 ? '#037fff' : 'transparent' }} onClick={() => { setPage(2); setMobileOpen(false) }}>

            <ListItemText  className={classes.mainmenu} disableTypography={true} children={<Typography className='listitemtxt' style={{ color: page === 2 ? '#fff' : '#a4acc4' }} variant='body2'> {translate.contact}</Typography>} />
            <div className='overlay'></div>
          </ListItemButton>


        </List>

      </div>
      {/* <div className={classes.bottommenu}>
        {/* <Button color={lang === 'fa' ? 'primary' : 'secondary'} onClick={() => changeLanguage('fa')}>fa</Button>
        <Button color={lang === 'en' ? 'primary' : 'secondary'} onClick={() => changeLanguage('en')}>en</Button> */}

      {/* </div>  */}

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const getPage = () => {
    switch (page) {
      case 0:
        return <HomeScreen />

      case 1:
        return <AboutScreen />

      case 2:
        return <ContactScreen />

      case 3:
        return <PortfolioScreen />

      case 4:
        return <ResumeScreen />


      default:
        return <HomeScreen />
    }
  }
  return (
    <div className={classes.root}>


      <CssBaseline />

      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer

          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          style={
            { backgroundColor: "#f00" }
          }
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>




      <main className={classes.contentweb}>
        <span className='line line1'> </span>
        <span className='line line2'> </span>
        <span className='line line3'> </span>
        <span className='line line4'> </span>
        {/*{page === 0 ? (<HomeScreen />) : page === 1 ? (<AboutScreen /> ): page === 2 ? (<ContactScreen />) : page === 3 ? (<PortfolioScreen /> ): (<ResumeScreen />)}*/}
        { getPage()  }

      </main>

    </div>
  );
}
