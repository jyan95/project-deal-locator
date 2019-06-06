import React from 'react';
import { Link } from "react-router-dom";
import API from '../api';

class CategoryCard extends React.Component {

  // followCategory = (slug) => {
  //  grab user_id
  //  API.addUserCategory(slug, user_id);
  // }

  render(){
    let { slug, name } = this.props.data.category;
    console.log(this.props.data);

    // conditionally render the follow button
    return(
      <div id={slug}>
        <Link to={`/categories/${slug}`}>
          {name}
        </Link>
         - Follow
      </div>
    )
  }
}

export default CategoryCard;
