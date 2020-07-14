import React from "react";
import {Sidebar} from 'react-admin';

import Drawer from '@material-ui/core/Drawer';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;
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
    justifyContent: 'flex-end',
  },
  appSidebarLogoIcon: {
    borderRadius: '.29rem',
    width: '40px',
    height: '40px',
    background: '#fff',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    boxShadow: '1px 1px 3px rgba(7,9,25,.2)',
  },
}));

const MySidebar = ({props, valueOpen, drawerClose}) => {
  const classes = useSidebarStyles();
  const theme = useTheme();
  console.log('open',valueOpen)
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
        <IconButton onClick={drawerClose()}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
        </IconButton>
      </div>
      <div className={classes.appSidebarLogoIcon}>
        <img alt="Bamburgh React Crypto Application with Material-UI PRO"
             src="logo.svg"
        />
        ااعاعهاعاه
      </div>
      <Divider/>

      <Divider/>

    </Drawer>
  );
};

export default MySidebar
