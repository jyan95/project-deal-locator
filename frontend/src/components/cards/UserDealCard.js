import React from 'react';

import Card from '@material-ui/core/Card';
import Fab from '@material-ui/core/Fab';
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
    let { id, expires_at, short_title, url, image_url, description, address } = this.props.deal;
    // console.log(image_url);
    return(
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom component='h3'>
              <a href={url}>{short_title}</a>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.formatDate(expires_at)}
            </Typography>
          </CardContent>
          <Divider variant="middle" />
        </CardActionArea>
    )
  }
}

export default UserDealCard;
