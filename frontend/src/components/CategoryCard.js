import React from 'react';
import { Link } from "react-router-dom";

class CategoryCard extends React.Component {

  render(){
    let { slug, name } = this.props.category;
    // console.log(this.props);
    return(
      <div id={this.props.category}>
        <Link to={`/categories/${slug}`} onClick={() => this.props.setCategory(slug)}>
          {name}
        </Link>
      </div>
    )
  }
}

export default CategoryCard;
