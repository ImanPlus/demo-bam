import React from "react";
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';

import {makeStyles, fade} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

//----------------- Styles -----------------
const drawerWidth = 340;
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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  //----------------- Segmentation Style -----------------
  appBar_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  appBar_Left: {
    display: 'flex',
    flexDirection: 'row',
    verticalAlign: 'middle',
    // alignItems:'flex-end',
    alignItems: 'center',
  },
  //----------------- Search Style -----------------
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
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
      <Toolbar className={classes.appBar_container}>
        <div className={classes.appBar_Left}>
          <div>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => drawerOpen()}
              edge="start"
              className={clsx(classes.menuButton, valueOpen && classes.hide)}
            >
              <MenuIcon/>
            </IconButton>
          </div>
          <div>
            <Typography variant="h6" noWrap>
              {props.title}
            </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{'aria-label': 'search'}}
            />
          </div>
        </div>
        <div>grgtrgtrgrt</div>
      </Toolbar>{console.log('open,props', valueOpen, props)}
    </AppBar>
  )
}
export default MyAppBar;