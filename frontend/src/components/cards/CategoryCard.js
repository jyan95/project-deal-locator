import React from 'react';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const CategoryCard = (props) => {
  let { slug, name } = props.data.category;
  // console.log(this.props.data);
  // conditionally render the follow button
  return(
    <CardActionArea href={`/categories/${slug}`}>
      <CardContent>
        <Typography gutterBottom component='h2'>
          {name.toUpperCase()}
        </Typography>
      </CardContent>
      <Divider variant="middle" />
    </CardActionArea>
  )
}

export default CategoryCard;
