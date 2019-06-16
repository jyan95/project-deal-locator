import React from 'react';
import TextField from '@material-ui/core/TextField';

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
        <TextField
          id="standard-full-width"
          placeholder="Search deals by category"
          helperText=""
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          value={this.state.input}
          onChange={this.handleChange}
        >
        <input
          type='text'
          id='filter'
          value={this.state.input}
          onChange={this.handleChange}
          placeholder='Search by Category'
        />
        </TextField>
      </div>
    )
  }
}

export default FilterForm;
