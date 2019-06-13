import React from 'react';
import { Link, Redirect } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import API from '../api';

class CategoryCard extends React.Component {

  handleClick = (slug) => {
    // console.log('clicking', slug);
    return <Redirect to={`/categories/${slug}`} />
  }

  render(){
    let { slug, name } = this.props.data.category;
    // console.log(this.props.data);
    // conditionally render the follow button
    return(
        <CardActionArea href={`/categories/${slug}`}>
          <CardContent>
            <Typography gutterBottom varient='h5' component='h2'>
              {name.toUpperCase()}
            </Typography>
          </CardContent>
        </CardActionArea>
    )
  }
}

export default CategoryCard;
