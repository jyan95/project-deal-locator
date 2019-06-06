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

  // componentDidMount(){
  //   API.getCategories()
  //   .then(data => this.setState({categories: data.categories}))
  // }

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
let { lat,lng } = results[1][0][0].latlng;
"results": [
    {
      "providedLocation": {
        "location": "Washington,DC"
      },
      "locations": [
        {
          "street": "",
          "adminArea6": "",
          "adminArea6Type": "Neighborhood",
          "adminArea5": "Washington",
          "adminArea5Type": "City",
          "adminArea4": "District of Columbia",
          "adminArea4Type": "County",
          "adminArea3": "DC",
          "adminArea3Type": "State",
          "adminArea1": "US",
          "adminArea1Type": "Country",
          "postalCode": "",
          "geocodeQualityCode": "A5XAX",
          "geocodeQuality": "CITY",
          "dragPoint": false,
          "sideOfStreet": "N",
          "linkId": "282772166",
          "unknownInput": "",
          "type": "s",
          "latLng": {
            "lat": 38.892062,
            "lng": -77.019912
          },
          "displayLatLng": {
            "lat": 38.892062,
            "lng": -77.019912
          },
          "mapUrl": "http://www.mapquestapi.com/staticmap/v4/getmap?key=KEY&type=map&size=225,160&pois=purple-1,38.892062,-77.019912,0,0,|&center=38.892062,-77.019912&zoom=12&rand=306744981"
        }
