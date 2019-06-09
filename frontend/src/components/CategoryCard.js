import React from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import API from '../api';

class CategoryCard extends React.Component {

  // followCategory = (slug) => {
  //  grab user_id
  //  API.addUserCategory(slug, user_id);
  // }

  render(){
    let { slug, name } = this.props.data.category;
    // console.log(this.props.data);

    // conditionally render the follow button
    return(
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom varient='h5' component='h2'>
              {name}
            </Typography>
              <div id={slug}>
                <Link to={`/categories/${slug}`}>
                  {name}
                </Link>
              </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
        </CardActions>
      </Card>
    )
  }
}

export default CategoryCard;
