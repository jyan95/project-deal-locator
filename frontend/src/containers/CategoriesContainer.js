import React from 'react';
import CategoryCard from '../components/CategoryCard';

// import './Categories.css';

// index page for all categories
class CategoriesContainer extends React.Component {
  render(){
    // iterate through categories and render category components
    return(
      <div id='categories'>
        <h1>Categories</h1>
        <CategoryCard />
      </div>
    )
  }
}

export default CategoriesController;
