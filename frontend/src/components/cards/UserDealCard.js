import React from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

class UserDealCard extends React.Component {
  state = {following:true};

  truncate = (str, charLimit) => {
    return str.length > charLimit ? str.substr(0, charLimit-1) + '…' : str;
  }

  formatDate = (string) => {
    return string.split('').slice(0,10);
  }

  removeDeal = (id) => {
    this.setState({following:false});
    this.props.removeClick(id);
  }

  render(){
    let { id, expires_at, short_title, url, merchant } = this.props.deal;
    // console.log(this.props.deal);
    return(
      <div key={id}>
        {this.state.following ? <CardContent>
          <CardActionArea href={url} target='_blank'>
            <Typography gutterBottom component='h3'>
              {short_title}
            </Typography>
          </CardActionArea>
            <Grid container spacing={3} alignItems='baseline'>
              <Grid item xs={8}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Address: {merchant.address}
                  <br/>
                  Expires {this.formatDate(expires_at)}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Button size='small' variant="contained" color="secondary" onClick={() => this.removeDeal(id)}>
                  Remove
                </Button>
              </Grid>
            </Grid>
            <br/>
          <Divider variant="middle" />
        </CardContent> : null}
      </div>
    )
  }
}

export default UserDealCard;
