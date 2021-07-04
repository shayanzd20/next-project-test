import React, { useState } from "react";
import { useRouter } from "next/router";
import { makeStyles } from '@material-ui/core/styles';
import { Input,TextField,MuiAlert } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  input:{
    display: 'flex',
    marginTop: '50px',
  
  },
  textInput:{
    'margin-left': 10,
    // 'width': 10
    // 'height':10
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Login() {
  const router = useRouter();
  const classes = useStyles();
  let [username,setUsername]= useState()


  const handleSubmit = async (event) => {
    console.log("here");
    event.preventDefault();

    let result = await loginQuery()
    if(result.status == 200){
      <Alert severity="success">This is a success message!</Alert>
      router.replace("/dashboard");
    }
  };

  const loginQuery = ()=>{

    return { msg: 'success', status: 200}
  }


  return (
    <div style={{ textAlign: "center" }}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <h4>Login Form</h4>
        <div style={{ flex: 1, flexDirection: "column" }}>
          <div style={{ flex: 1}}>
            <label className={classes.input}>
              Username: 
              <TextField type="text" name="username" variant="filled" className={classes.textInput}/>
            </label>
          </div>

          <div style={{ flex: 1, marginTop: 10 }}>
            <label className={classes.input}>
              Password: 
              <TextField type="text" name="password" variant="filled" className={classes.textInput}/>
            </label>
          </div>
        </div>

        <input className={classes.input} type="submit" value="Log in" />
      </form>
    </div>
  );
}

/* 
import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
      <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert>
    </div>
  );
} */
