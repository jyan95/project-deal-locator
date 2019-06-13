import React from 'react';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class UserDealCard extends React.Component {
  truncate = (str, charLimit) => {
    return str.length > charLimit ? str.substr(0, charLimit-1) + '…' : str;
  }

  formatDate = (string) => {
    return string.split('').slice(0,10);
  }

  render(){
    let { id, expires_at, short_title, url, image_url, description } = this.props.deal;
    // console.log(image_url);
    return(
      <Card style={{minHeight: '150px'}} key={id}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom component='h3'>
              <a href={url}>{short_title}</a>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.formatDate(expires_at)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default UserDealCard;
