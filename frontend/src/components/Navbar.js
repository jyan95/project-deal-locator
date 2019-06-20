import React from 'react';
import NavMenu from './NavMenu';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
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

  return (
    <div className={classes.grow}>
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <Grid container direction='row' justify='space-evenly' alignItems='center'>
            <Grid item>
              <Button href='/' color='inherit'>
                <MapIcon/>
              </Button>
            </Grid>
            <Grid item>
              <Button href='/categories' color='inherit'>
                <SearchIcon/>
              </Button>
            </Grid>
            <Grid item>
              <Button href='/your-deals' color='inherit'>
                <ShoppingBasket/>
              </Button>
            </Grid>
          </Grid>
          <NavMenu/>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
