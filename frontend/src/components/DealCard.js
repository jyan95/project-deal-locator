import React from 'react';
import { Link } from "react-router-dom";

class DealCard extends React.Component {

  render(){
    let { id, discount_percentage, expires_at, short_title, url } = this.props.deal;
    // console.log(this.props);
    return(
      <div id={`deal${id}`}>
        <a href={url}>{short_title}</a>
      </div>
    )
  }
}

export default DealCard;
