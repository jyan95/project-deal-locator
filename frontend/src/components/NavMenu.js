import React from 'react';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreIcon from '@material-ui/icons/MoreVert';


const token = localStorage.getItem('token');

function logoutClick() {
  console.log('clicking logout');
  localStorage.clear();
  // handleClose();
  window.open('/login','_self');
}

function loginClick() {
  // handleClose();
  console.log('clicking login');
  window.open('/login','_self');
}

function profileClick() {
  window.open('/profile/','_self');
}

const NavMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <IconButton color='inherit' aria-haspopup="true" onClick={handleClick}>
        <MoreIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={profileClick}>Profile</MenuItem>
        {!!token ? <MenuItem onClick={logoutClick}>Logout</MenuItem> : <MenuItem onClick={loginClick}>Login</MenuItem>}
      </Menu>
    </div>
  );
}

export default NavMenu;
