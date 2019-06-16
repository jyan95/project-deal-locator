import React from 'react';

import { makeStyles, useTheme } from '@material-ui/core/styles';
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

function followDeal(deal){

}

function openDeal(deal){
  window.open(deal.url,'_blank');
}

const DealCard = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  let { id, short_title, url, description } = props.deal;

  // <CardMedia
  //   className={classes.cover}
  //   image={image_url}
  //   title="deal image"
  // />

  return (
    <div className={classes.details} key={id}>
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
            </Button> : <Button size='small' variant='outlined' disabled>
              log in to follow deal
            </Button>}
          </Grid>
          <Grid item sm={6}>
            <Button size='small' variant='outlined' onClick={() => openDeal(props.deal)}>
              open in new tab
            </Button>
          </Grid>
        </Grid>
        <br/>
        <Divider variant="middle" />
      </CardContent>
    </div>
  );
}

export default DealCard;
