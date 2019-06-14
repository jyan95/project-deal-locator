import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

class UserDealCard extends React.Component {
  truncate = (str, charLimit) => {
    return str.length > charLimit ? str.substr(0, charLimit-1) + '…' : str;
  }

  formatDate = (string) => {
    return string.split('').slice(0,10);
  }

  render(){
    let { id, expires_at, short_title, url, image_url, description, merchant } = this.props.deal;
    // console.log(this.props.deal);
    return(
      <CardContent>
        <CardActionArea>
          <Typography gutterBottom component='h3'>
            {short_title}
          </Typography>
        </CardActionArea>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Typography variant="body2" color="textSecondary" component="p">
                {merchant.address}
                <br/>
                {this.formatDate(expires_at)}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="secondary"> Remove </Button>
            </Grid>
          </Grid>
          <br/>
        <Divider variant="middle" />
      </CardContent>
    )
  }
}

export default UserDealCard;
