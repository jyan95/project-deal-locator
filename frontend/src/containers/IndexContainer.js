import React from 'react';
import CategoriesContainer from './CategoriesContainer';
import DealsContainer from './DealsContainer';
import API from '../api';

// import './Categories.css';

// category index
class IndexContainer extends React.Component {
  state = {
    active_index: 'categories',
    categories: [],
    active_category: '',
    deals: []
  };

  setCategory = (slug) => {
    API.getCategory(slug)
    .then(data => (
      this.setState({
        active_index: 'deals',
        active_category: slug,
        deals: data.deals
      })
    ))
    // console.log(this.state);
  }

  componentDidMount(){
    API.getCategories()
    .then(data => this.setState({categories: data.categories}))
  }

  render(){
    let { active_index, categories, deals } = this.state;
    // console.log('Categories',this.state.categories);
    // console.log(this.props);
    // iterate through categories and render category components
    return(
      <div id='index-container'>
        {active_index === 'categories' ? <CategoriesContainer categories={categories} setCategory={this.setCategory}/> : active_index === 'deals' ? <DealsContainer deals={deals}/> : null }
      </div>
    )
  }
}

export default IndexContainer;
