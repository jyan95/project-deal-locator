import React from 'react';
import CategoryCard from '../components/CategoryCard';

// import './Categories.css';

// category index
class CategoriesContainer extends React.Component {

  render(){
    // console.log('Categories',this.state.categories);
    // console.log(this.props);
    // iterate through categories and render category components
    return(
      <div id='categories-container'>
        <h1>ALL CATEGORIES</h1>
        {this.props.categories.map(c => <CategoryCard category={c.category} key={c.id} setCategory={this.props.setCategory}/>)}
      </div>
    )
  }
}

export default CategoriesContainer;
