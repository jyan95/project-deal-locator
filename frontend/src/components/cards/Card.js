import React, { useState } from 'react';
import API from '../../api';

import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  }
}));

function truncate(str, charLimit){
  return str.length > charLimit ? str.substr(0, charLimit-1) + '…' : str;
}

function openDeal(url){
  window.open(url,'_blank');
}

const DealCard = (props) => {
  const classes = useStyles();
  const [following, setFollowing] = useState(false);
  // const theme = useTheme();

  function followDeal(deal){
    const token = localStorage.getItem('token');
    API.addUserDeal(deal.id, token); // track in parent state and add to userDeals array
    setFollowing(true);
    // props.followClick();
  }

  let { id, short_title, url, description } = props.deal;

  return (
    <div className={classes.details} key={id}>
    {following ? null :
      <CardContent className={classes.content}>
        <Typography component="h6" variant="h6">
          {short_title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {truncate(description,150)}
        </Typography>
        <br/>
        <Grid container direction='row' justify='center' alignItems='center' spacing={2}>
          <Grid item sm={6}>
            {props.loggedIn ? <Button size='small' variant='outlined' color='primary' onClick={() => followDeal(props.deal)}>
              follow deal
            </Button> : <Button size='small' variant='outlined' href='/login'>
              log in to follow deal
            </Button>}
          </Grid>
          <Grid item sm={6}>
            <Button size='small' variant='outlined' onClick={() => openDeal(url)}>
              open in new tab
            </Button>
          </Grid>
        </Grid>
        <br/>
        <Divider variant="middle" />
      </CardContent>}
    </div>
  );
}

export default DealCard;
