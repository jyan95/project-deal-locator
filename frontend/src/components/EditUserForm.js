import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
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

const EditUserForm = (props) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
    // console.log('handling login form', formData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(formData);
    setFormData({username:'',phone:'',password:''})
  }

  return (
    <Container component="main" maxWidth="xs">

      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Update Info
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                autoFocus
                value={formData.username}
                onChange={handleChange}
                autoComplete='off'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                id="phone"
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                autoComplete='off'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type='password'
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                value={formData.password}
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
            Update Info
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default EditUserForm;
