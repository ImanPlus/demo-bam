import React from "react";
import Logo from './logo.svg'

import Drawer from '@material-ui/core/Drawer';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

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
    padding: theme.spacing(2.5, 3),
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
  },
  app_sidebar_content: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflowY: 'auto',
    overflowX: 'visible',
  },
  app_sidebar_content_widget: {
    display: 'flex',
    flexDirection: 'column',
  },
  app_sidebar_content_widget_top: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 3),
    marginTop: 25,
    '& span': {
      fontWeight: 700,
      color: '#3c44b1',
    },
    '& a': {
      color: '#3498DB',
    },
  },
  app_sidebar_content_widget_down: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(1.5, 3),
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  app_sidebar_content_widget_down_svg: {
    color: '#f83245',
    fill: 'currentColor',
    verticalAlign: 'middle',
    width: 40,
    height: 40,
  },
  app_sidebar_content_widget_down_text_up_left: {
    '& b': {
      fontSize: '17px',
    },
  },
  app_sidebar_content_widget_down_text_up: {
    display: 'flex',
    flexDirection: 'row',
  },
  app_sidebar_content_widget_down_text_up_right: {
    backgroundColor: '#fff5f6',
    height: '20px',
    lineHeight: '21px',
    color: '#f83245',
    marginLeft: '.5rem',
  },
  app_sidebar_content_widget_down_text_down: {
    color: '#070919',
    fontSize: '.875rem',
    opacity: .4,
  },
  app_sidebar_content_widget_down_text: {
    display: 'flex',
    flexDirection: 'column',
  },
  app_sidebar_content_widget_buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // '& palette':{
    //   primary: 'green',
    // },
    '& button': {
      boxShadow: '0 0.25rem 0.55rem rgba(27,201,67,.35)',
      color: '#fff',
      fontSize: '.83333rem',
      paddingLeft: '1.25rem',
      paddingRight: '1.25rem',
      fontWeight: 700,
    },
    '& #bt1': {background: '#E91E63',},
    '& #bt2': {background: '#1bc943'},
  },
  app_sidebar_spacer: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1.5, 3),
  },
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
      {/*----------------- Sidebar Header  -----------------*/}
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
      {/*----------------- Sidebar Content  -----------------*/}
      <div className={classes.app_sidebar_content}>
        <div className={classes.app_sidebar_content_widget}>
          <div className={classes.app_sidebar_content_widget_top}>
            <div>
              <span>WATCH LIST</span>
            </div>
            <div>
              <a href="#/" title="View details">See all</a>
            </div>
          </div>
          <div className={classes.app_sidebar_spacer}>
            <div className={classes.app_sidebar_content_widget_down}>
              <div className={classes.app_sidebar_content_widget_down_svg}>
                <svg>
                  <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6h-6z"></path>
                </svg>
              </div>
              <div className={classes.app_sidebar_content_widget_down_text}>
                <div className={classes.app_sidebar_content_widget_down_text_up}>
                  <div className={classes.app_sidebar_content_widget_down_text_up_left}><b>2.4895 BTC</b></div>
                  <div className={classes.app_sidebar_content_widget_down_text_up_right}>-8%</div>
                </div>
                <div className={classes.app_sidebar_content_widget_down_text_down}>$16,497</div>
              </div>
            </div>
            <div className={classes.app_sidebar_content_widget_buttons}>
              <Button id="bt1"> Deposit </Button>
              <Button id="bt2"> Withdraw </Button>
            </div>
          </div>
        </div>
      </div>
      <Divider/>
      {/*----------------- Sidebar Footer  -----------------*/}
    </Drawer>
  );
};

export default MySidebar



