import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const AddDealForm = (props) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    expiration: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
    // console.log('handling login form', formData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(formData);
    setFormData({name:'',description:'',expiration:''})
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add Deal
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Deal Name"
                autoFocus
                value={formData.name}
                onChange={handleChange}
                autoComplete='off'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                multiline
                id="description"
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                autoComplete='off'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="expiration"
                label="Expire Date"
                id="expiration"
                value={formData.expiration}
                onChange={handleChange}
                autoComplete='off'
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            add deal
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default AddDealForm;
