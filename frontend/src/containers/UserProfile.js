import React from 'react';
import EditUserForm from '../components/EditUserForm';
import AddedDealList from '../components/AddedDealList';
import API from '../api';

import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

let token = localStorage.getItem('token');

class UserProfile extends React.Component {
  state = {
    displayForm: false,
    displayConfirm: false,
    currentUser: {}
  };

  toggleFormModal = () => {
    this.setState({displayForm:!this.state.displayForm});
  }

  toggleConfirmModal = () => {
    this.setState({displayConfirm:!this.state.displayConfirm});
  }

  editUser = (formData) => {
    API.editUser(token, formData)
    this.setState({displayForm: false});
  }

  deleteUser = () => {
    // console.log('deleting user');
    API.deleteUser(token);
  }

  deleteAddedDeal = (id) => {
    API.deleteAddedDeal(id)
    .then(r => {
      let updated = this.state.currentUser.added_deals.filter(ad => ad.id !== id);
      this.setState({currentUser: {...this.state.currentUser, added_deals: updated}})
    })
  }

  componentDidMount() {
    if(!!token) {
      API.getUser(token)
      .then(user => this.setState({currentUser: user}))
    };
  }

  render () {
    let { username, phone, added_deals } = this.state.currentUser;
    // console.log(this.state);
    return (
      <Container component="main" maxWidth="xs">
        <div>
          <br/>
          <br/>
          <CardContent>
            <Typography component="h1" variant="h6" align='center'>
              YOUR PROFILE
            </Typography>
            <br/>
            <Divider variant='middle' />
            <br/>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              Username: {username}
              </Grid>
              <Grid item xs={12}>
              Phone: {!!phone ? phone : 'not listed'}
              </Grid>
              <Grid item xs={12}>
              Added Deals: {!!added_deals ? <AddedDealList deals={this.state.currentUser.added_deals} handleClick={this.deleteAddedDeal}/> : null}
              </Grid>
            </Grid>
            <br/>
            <Divider variant='middle' />
            <br/>
          </CardContent>
          <Grid container direction='row' justify='center' spacing={2}>
            <Grid item sm={6}>
              <Button variant="outlined" color="primary" onClick={this.toggleFormModal} >
                update info
              </Button>
            </Grid>
            <Grid item sm={6}>
              <Button variant="outlined" color="secondary" onClick={this.toggleConfirmModal} >
                delete account
              </Button>
            </Grid>
          </Grid>
        </div>
        <Dialog open={this.state.displayForm} onClose={this.toggleFormModal}>
          <EditUserForm submitForm={this.editUser}/>
        </Dialog>
        <Dialog open={this.state.displayConfirm} onClose={this.toggleConfirmModal}>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete your account?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.deleteUser} color="primary">
              confirm
            </Button>
            <Button onClick={this.toggleConfirmModal} color="primary">
              cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    )
  }
}

export default UserProfile;
