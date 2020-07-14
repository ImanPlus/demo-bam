import React from "react";
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';

import {makeStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

//----------------- Styles -----------------
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}))

//----------------- Main Function -----------------
const MyAppBar = ({props, valueOpen, drawerOpen}) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: valueOpen,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={drawerOpen()}
          edge="start"
          className={clsx(classes.menuButton, valueOpen && classes.hide)}
        >
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" noWrap>
          {props.title}
        </Typography>
      </Toolbar>{console.log('open,props',valueOpen,props)}
    </AppBar>
  )
}
export default MyAppBar;