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
  appBar_right: {
    display: 'flex',
    flexDirection: 'row',
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
//----------------- Widget Style -----------------
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
//----------------- Avatar Style -----------------
  appBar_right_avatar: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: '.25rem',
    position: 'relative',
    fontSize: '1.2rem',
    transition: 'all .2s ease-in-out',
    padding: 0,
  },
  avatar_Badge_root: {
    display: 'inline-flex',
    position: 'relative',
    flexShrink: 0,
    verticalAlign: 'middle',
  },
  avatar_icon: {
    '& img': {
      borderRadius: '.65rem',
      boxShadow: '0 0 0 3px #fff',
      overflow: 'hidden',
      display: 'block',
      width: 44,
      height: 44,
      lineHeight: 44,
      transition: 'all .2s ease-in-out',
      opacity: 1,
    },

  },
  avatar_light: {
    color: 'var(--success)',
    backgroundColor: '#1bc943',
    border: '1px solid currentColor',
    boxShadow: '0 0 0 2px #fff',
    right: '14%',
    bottom: '14%',
    transform: 'scale(1) translate(50%, 50%)',
    transformOrigin: '100% 100%',
    height: 8,
    padding: 0,
    minWidth: 8,
    borderRadius: 4,
    zIndex: 1,
    position: 'absolute',
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '0.75rem',
    boxSizing: 'border-box',
    transition: 'transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    animation: 'jss209 1.2s infinite ease-in-out',
    animationDuration: '1.2s',
    animationTimingFunction: 'ease-in-out',
    animationDelay: '0s',
    animationIterationCount: 'infinite',
    animationDirection: 'normal',
    animationFillMode: 'none',
    animationPlayState: 'running',
    animationName: 'jss209',
  },
  appBar_right_profile: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '.5rem',
  },
  text_success: {
    color: '#1bc943',
    '& small': {
      fontSize: '80%',
      fontWeight: 400,
    },
  },
  text_weight_bold: {
    fontWeight: 700,
  },
  appBar_right_profile_content: {
    paddingLeft: '1rem',
    '& svg': {
      overflow: 'visible',
      width: '0.625em',
      opacity: .5,
      display: 'inline-block',
      fontSize: 'inherit',
      height: '1em',
      verticalAlign: '-0.125em',
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
        <div className={classes.appBar_right}>
          <div className={classes.appBar_right_avatar}>
            <span className={classes.avatar_Badge_root}>
              <div className={classes.avatar_icon}>
                <img
                  src="https://demo.uifort.com/bamburgh-react-crypto-application-pro-demo/static/media/avatar3.d5f40349.jpg"
                  alt="avatar"
                />
              </div>
              <span className={classes.avatar_light}></span>
            </span>
          </div>
          <div className={classes.appBar_right_profile}>
            <span className={classes.text_success}>
              <small>Account verified</small>
            </span>
            <div className={classes.text_weight_bold}>Satoshi Nakamoto</div>
          </div>
          <span className={classes.appBar_right_profile_content}>
           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down"
                className="svg-inline--fa fa-angle-down fa-w-10 opacity-5" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
           >
             <path fill="currentColor"
                   d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z">
             </path>
           </svg>
          </span>
        </div>
      </Toolbar>{console.log('open,props', valueOpen, props)}
    </AppBar>
  )
}
export default MyAppBar;