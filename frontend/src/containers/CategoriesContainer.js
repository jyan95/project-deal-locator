import React from 'react';
import FilterForm from '../components/FilterForm';
import CategoryCard from '../components/CategoryCard';
import API from '../api';

// import './Categories.css';

// category index
class CategoriesContainer extends React.Component {
  state = {
    categories: [],
    filteredCategories: []
  }

  componentDidMount(){
    API.getCategories()
    .then(data => this.setState({categories: data.categories, filteredCategories: data.categories}))
  }

  filterCategories = (input) => {
    // console.log(input);
    let categories = this.state.categories;
    let filteredCategories = categories.filter(c => {
      let slug = c.category.slug;
      return slug.indexOf(input.toLowerCase()) !== -1
    });
    this.setState({filteredCategories});
  }

  render(){
    // console.log('Categories',this.state.categories);
    // console.log(this.props);
    // iterate through categories and render category components
    return(
      <React.Fragment>
        <h1>ALL CATEGORIES</h1>
        <FilterForm onChange={this.filterCategories}/>
        <div id='categories-container'>
          {this.state.filteredCategories.map(c => <CategoryCard category={c.category} key={c.id} />)}
        </div>
      </React.Fragment>
    )
  }
}

export default CategoriesContainer;
