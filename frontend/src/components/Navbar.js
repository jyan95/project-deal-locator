import React from 'react';
// import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={e => {}}
      {...props}
    />
  );
}

function Navbar() {
  const [value, setValue] = React.useState(0);

  function handleChange(e, newValue){
    setValue(newValue);
  }

  return (
    <AppBar>
      <Tabs variant="fullWidth" value={value} onChange={handleChange} aria-disabled='true'>
        <LinkTab label="Home" href="/" value={0}/>
        <LinkTab label="Browse" href="/categories" value={1}/>
        <LinkTab label="Your Deals" href="/profile" value={2}/>}
      </Tabs>
    </AppBar>
  );
}

export default Navbar;
