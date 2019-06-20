import React from 'react';
import FilterForm from '../components/FilterForm';
import CategoryCard from '../components/cards/CategoryCard';
import API from '../api';

import Container from '@material-ui/core/Container';

class CategoriesContainer extends React.Component {
  state = {
    categories: [],
    filteredCategories: []
  }

  componentDidMount(){
    API.getCategories()
    .then(data => this.setState({categories: data.categories, filteredCategories: data.categories.filter(c => c.category.slug !== 'adult')}))
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
    return(
      <React.Fragment>
        <Container>
          <FilterForm onChange={this.filterCategories}/>
          <div id='categories-container'>
            {this.state.filteredCategories.map(data => <CategoryCard data={data} key={data.category.slug} />)}
          </div>
          <br/>
          <br/>
        </Container>
      </React.Fragment>
    )
  }
}

export default CategoriesContainer;
