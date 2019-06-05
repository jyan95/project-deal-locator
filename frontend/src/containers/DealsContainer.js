import React from 'react';

// deals index
class DealsContainer extends React.Component {

  render(){
    console.log(this.props.deals);
    return(
      <div id='deals-container'>
        <h1>ALL DEALS</h1>
      </div>
    )
  }
}

export default DealsContainer;
