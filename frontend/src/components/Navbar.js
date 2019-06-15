import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={e => {}}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(e, newValue){
    setValue(newValue);
  }

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-disabled='true'>
        <LinkTab label="map" href="/" value={0}/>
        <LinkTab label="browse" href="/categories" value={1}/>
        <LinkTab label="your deals" href="/your-deals" value={2}/>}
      </Tabs>
    </AppBar>
  );
}

export default Navbar;
