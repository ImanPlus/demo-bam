import React from "react";
import Logo from './logo.svg'

import Drawer from '@material-ui/core/Drawer';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';

//----------------- Styles -----------------
const drawerWidth = 340;
const useSidebarStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  appSidebarLogoIcon: {
    background: '#3c44b1',
    boxShadow: '1px 1px 3px rgba(7,9,25,.2)',
    //   '& img':{
    // width: '26px',
    // margin: '0 auto',
    // -webkitAanimation: 'logo-spin 20s linear infinite',
    // animation: 'logo-spin 20s linear infinite',
    //   },
  },
  app_sidebar_logo_text: {
    lineHeight: 1,
    padding: '0 0 0 .66667rem',
    transition: 'all .5s cubic-bezier(.685,.0473,.346,1)',
    display: 'flex',
    flexDirection: 'column',
    '& b': {
      fontSize: '1.265rem',
      fontWeight: 700,
    },
    '& span': {
      display: 'block',
      textTransform: 'uppercase',
      fontSize: '.72917rem',
      padding: '4px 0',
    },
  },
  app_sidebar_logo: {
    display: 'flex',
    alignItems: 'center',
    transition: 'all .5s cubic-bezier(.685,.0473,.346,1)',
    '& a': {
      display: 'contents',
      textDecoration: 'none',
    },
  }
}));

//----------------- Main Function -----------------
const MySidebar = ({props, valueOpen, drawerClose}) => {
  const classes = useSidebarStyles();
  const theme = useTheme();
  console.log('open', valueOpen)
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={valueOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <div className={classes.app_sidebar_logo}>
          <a href="/">
            <div className={classes.appSidebarLogoIcon}>
              <img
                src={Logo}
                alt="App-logo" width="50" height="50"/>
            </div>
            <div className={classes.app_sidebar_logo_text}>
              <span>Crypto</span>
              <b>bamburgh</b>
            </div>
          </a>
        </div>
        <IconButton onClick={() => drawerClose()} style={{backgroundColor: '#c9ede7'}}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
        </IconButton>
      </div>

      <Divider/>

      <Divider/>

    </Drawer>
  );
};

export default MySidebar



