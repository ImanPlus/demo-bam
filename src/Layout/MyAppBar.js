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
    // verticalAlign: 'middle',
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

  appHeader_widget: {
    display: 'flex',
    flexDirection: 'row',
  },
  appHeader_widget_items: {
    display: 'flex',
    flexDirection: 'row',

    marginLeft: 8,

  },
  appHeader_widget_items_svg: {
    paddingTop: 8,
    fill: 'currentColor',
    width: 40,
    height: 40,
    '& #red': {color: '#f83245'},
    '& #green': {color: '#27AE60'},
  },
  appHeader_widget_items_text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  appHeader_widget_items_text_uppercase: {
    textTransform: 'uppercase',
    fontSize: '.875rem',
    opacity: .6,
  },
  appHeader_widget_items_text_price: {
    display: 'flex',
    flexDirection: 'row',
    '& span': {
      fontWeight: 700,
      fontSize: '1.15rem',
      lineHeight: 1,
    },
    '& small': {
      paddingRight: '.25rem',
      opacity: .6,
      fontSize: '80%',
      fontWeight: 400,
    },
  },
  appHeader_widget_items_text_badge_danger: {
    backgroundColor: '#fff5f6',
    height: '20px',
    lineHeight: '21px',
    color: '#f83245',
    marginLeft: '.5rem',
    borderRadius: '.2rem',
    fontSize: '78%',
    fontWeight: 700,
  },
  appHeader_widget_items_text_badge_success: {
    backgroundColor: '#e5f9ed',
    height: '20px',
    lineHeight: '21px',
    color: '#1bc943',
    marginLeft: '.5rem',
    borderRadius: '.2rem',
    fontSize: '78%',
    fontWeight: 700,
  },
  appHeader_widget_items_generalSec_text: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 27,
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
          <div className={classes.appHeader_widget}>
            <div className={classes.appHeader_widget_items}>
              <div className={classes.appHeader_widget_items_generalSec_text}>
                <div className={classes.appHeader_widget_items_svg}>
                  <svg id="red">
                    <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6h-6z"></path>
                  </svg>
                </div>
                <div className={classes.appHeader_widget_items_text}>
                <span className={classes.appHeader_widget_items_text_uppercase}>
                  <small>Current losses</small>
                </span>
                  <div className={classes.appHeader_widget_items_text_price}>
                  <span>
                    <small>$</small>
                    46,362
                  </span>
                    <div className={classes.appHeader_widget_items_text_badge_danger}>-8%</div>
                  </div>
                </div>
              </div>
              <div className={classes.appHeader_widget_items_generalSec_text}>
                <div className={classes.appHeader_widget_items_svg}>
                  <svg id="green">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"></path>
                  </svg>
                </div>
                <div className={classes.appHeader_widget_items_text}>
                <span className={classes.appHeader_widget_items_text_uppercase}>
                  <small>Lifetime profits</small>
                </span>
                  <div className={classes.appHeader_widget_items_text_price}>
                  <span>
                    <small>$</small>
                    34,546
                  </span>
                    <div className={classes.appHeader_widget_items_text_badge_success}>+13%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>grgtrgtrgrt</div>
      </Toolbar>{console.log('open,props', valueOpen, props)}
    </AppBar>
  )
}
export default MyAppBar;