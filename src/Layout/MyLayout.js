import React from "react";
import { Layout } from 'react-admin';
// import MyAppBar from './MyAppBar';
import MySidebar from './MySidebar';
// import MyMenu from './MyMenu';
// import MyNotification from './MyNotification';

const MyLayout = props => <Layout
  {...props}
  // appBar={MyAppBar}
  sidebar={MySidebar}
  // menu={MyMenu}
  // notification={MyNotification}
/>;

export default MyLayout;