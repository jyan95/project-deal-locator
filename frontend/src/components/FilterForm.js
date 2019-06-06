import React from 'react';

class FilterForm extends React.Component {
  state = {
    input: ''
  };

  handleChange = (e) => {
    this.setState({input: e.target.value});
    this.props.onChange(e.target.value);
  }

  render(){
    return(
      <div>
        <label htmlFor='filter'></label>
        <input
          type='text'
          id='filter'
          value={this.state.input}
          onChange={this.handleChange}
          placeholder='Search by Category'
        />
      </div>
    )
  }
}

export default FilterForm;
