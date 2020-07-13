import React from "react";
import {Sidebar} from 'react-admin';
import {makeStyles} from '@material-ui/core/styles';

const useSidebarStyles = makeStyles({
  drawerPaper: {
    backgroundColor: 'red',
  },
  textcontex: {
    color: 'red',
    backgroundColor: 'blue',
  },
});

const MySidebar = props => {
  const classes = useSidebarStyles();
  return (
    <Sidebar style={{backgroundColor: 'red'}} classes={classes.textcontex} {...props}>

      <h3>This is Test</h3>
      <div className={classes.textcontex}>iman jalali</div>
    </Sidebar>
  );
};

export default MySidebar
