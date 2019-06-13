import React from 'react';
import FilterForm from '../components/FilterForm';
import CategoryCard from '../components/cards/CategoryCard';
import Container from '@material-ui/core/Container';

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
    return(
      <React.Fragment>
        <br/>
        <br/>
        <br/>
        <Container>
          <FilterForm onChange={this.filterCategories}/>
          <div id='categories-container'>
            {this.state.filteredCategories.map(data => <CategoryCard data={data} key={data.category.slug} />)}
          </div>
        </Container>
      </React.Fragment>
    )
  }
}

export default CategoriesContainer;
