import React from "react";
import {Layout} from 'react-admin';
import MyAppBar from './MyAppBar';
import MySidebar from './MySidebar';
// import MyMenu from './MyMenu';
// import MyNotification from './MyNotification';

// const MyLayout = props => <Layout
//   {...props}
//    appBar={MyAppBar}
//   sidebar={MySidebar}
//    menu={MyMenu}
//    notification={MyNotification}
// />;
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
}))

function MyLayout(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  {console.log('open Layout:',open)}
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <MyAppBar valueOpen={open} drawerOpen={handleDrawerOpen} props={props}/>
      <MySidebar valueOpen={open} drawerClose={handleDrawerClose} props={props} />
    </div>
  )
}

export default MyLayout;