import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 350,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}));

const AddedDealList = (props) => {
  const classes = useStyles();

  const handleClick = (id) => {
    props.handleClick(id);
    props.deals.filter(d => d.id !== id);
  }

  return (
    <List className={classes.root} subheader={<li />}>
      {props.deals.map(deal => (
        <ListItem key={`deal-${deal.id}`}>
          <ListItemText primary={`${deal.short_title}`} />
          <IconButton onClick={() => handleClick(deal.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default AddedDealList;
