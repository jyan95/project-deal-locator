import React from 'react';
import NavMenu from './NavMenu';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MapIcon from '@material-ui/icons/Map';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  }
}));

const Navbar = () => {
  const classes = useStyles();
  // const [value, setValue] = React.useState(0);

  // function handleChange(event, newValue) {
  //   setValue(newValue);
  // }

  return (
    <div className={classes.grow}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Grid container direction='row' justify='space-evenly' alignItems='center'>
            <Grid item>
              <IconButton href='/categories' color='inherit'>
                <SearchIcon/>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton href='/' color='inherit'>
                <MapIcon/>
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton href='/your-deals' color='inherit'>
                <ShoppingBasket/>
              </IconButton>
            </Grid>
          </Grid>
          <NavMenu/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
