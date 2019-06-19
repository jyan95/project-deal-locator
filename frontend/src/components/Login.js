import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assets/dealpal.svg';
import API from '../api';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
  const [formData, setFormData] = useState({username: '', password: ''});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
    // console.log('handling login form', formData);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    API.login(formData)
    .then(data => {
      // console.log("data", data);
      const { token } = data;
      localStorage.setItem('token', token);
    });
    // props.login(formData);
    setFormData({username:'',password:''});
    // console.log('submitted login', props)
    props.history.push('/');
  }

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <br/>
      <br/>
      <br/>
      <Grid container justify='center'>
        <Grid item>
          <Logo/>
        </Grid>
      </Grid>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="off"
            autoFocus
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="off"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container justify='center'>
            <Grid item>
              <Link href="/signup" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Login;
