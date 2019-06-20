import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

class DealCard extends React.Component {
  truncate = (str, charLimit) => {
    return str.length > charLimit ? str.substr(0, charLimit-1) + '…' : str;
  }

  render(){
    let { id, expires_at, short_title, url, description } = this.props.deal;
    
    return(
      <Card style={{minHeight: '200px'}} key={id}>
        <CardActionArea>
          <CardMedia image={image_url} title='deal image' style={{height: '140px'}}/>
          <CardContent>
            <Typography gutterBottom component='h3'>
              <a href={url}>{short_title}</a>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {this.truncate(description,150)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }
}

export default DealCard;
