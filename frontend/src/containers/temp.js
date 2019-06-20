// import React, { useState, useEffect } from 'react';
// import EditUserForm from '../components/EditUserForm';
// import API from '../api';
//
// import Container from '@material-ui/core/Container';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
//
// let token = localStorage.getItem('token');
//
// const useStyles = makeStyles(theme => ({
//   '@global': {
//     body: {
//       backgroundColor: theme.palette.common.white,
//     },
//   },
//   paper: {
//     marginTop: theme.spacing(5),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   }
// }));
//
// const UserProfile = (props) => {
//
//   const [displayForm, setDisplayForm] = useState(false);
//   const [displayConfirm, setDisplayConfirm] = useState(false);
//
//   const classes = useStyles();
//
//   const toggleFormModal = () => {
//     setDisplayForm(!displayForm);
//   }
//
//   const toggleConfirmModal = () => {
//     setDisplayConfirm(!displayConfirm);
//   }
//
//   const editUser = (formData) => {
//     API.editUser(token, formData)
//   }
//
//   const deleteUser = () => {
//     console.log('deleting user')
//     API.deleteUser(token)
//   }
//
//   // useEffect(() => {
//   //   API.getUser(token).then(user => setCurrentUser(user));
//   //   console.log(currentUser)
//   // }, [currentUser])
//
//   return (
//     <Container component="main" maxWidth="xs">
//       <div className={classes.paper}>
//         <Typography component="h1" variant="h5">
//           Your Profile
//         </Typography>
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//           Username:
//           </Grid>
//           <Grid item xs={12}>
//           Phone:
//           </Grid>
//           <Grid item xs={12}>
//           Added Deals:
//           </Grid>
//         </Grid>
//         <br/><br/>
//         <Grid container direction='row' justify='center' spacing={2}>
//           <Grid item sm={6}>
//             <Button variant="outlined" color="primary" onClick={toggleFormModal} >
//               update info
//             </Button>
//           </Grid>
//           <Grid item sm={6}>
//             <Button variant="outlined" color="secondary" onClick={toggleConfirmModal} >
//               delete account
//             </Button>
//           </Grid>
//         </Grid>
//       </div>
//       <Dialog open={displayForm} onClose={toggleFormModal}>
//         <EditUserForm submitForm={editUser}/>
//       </Dialog>
//       <Dialog open={displayConfirm} onClose={toggleConfirmModal}>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Are you sure you want to delete your account?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={deleteUser} color="primary">
//             confirm
//           </Button>
//           <Button onClick={toggleConfirmModal} color="primary">
//             cancel
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   )
// }
//
// export default UserProfile;
