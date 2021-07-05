import React, { useState,createContext, useContext } from "react";
import { useRouter } from "next/router";
import { makeStyles } from '@material-ui/core/styles';
import { Input,TextField, Alert } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';
import request from '../utils/request';
import styles from './login.module.scss';
import {profileContext}  from './main'

const Submit = styled.input`
        'margin-top':10;
      `;

const Box = styled.div`
        'margin-top':10;
      `;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  input:{
    display: 'flex',
    // marginTop: '50px',
    'margin-top':40,

  
  },
  textInput:{
    'margin-left': 10,
    // 'width': 10
  },
  submit:{
    'margin-top':40,
    'margin':40
  }
}));

export default function loginLogin() {
  const router = useRouter();
  const classes = useStyles();
  const [username,setUsername]= useState()
  const [password,setPassword]= useState()
  const [open, setOpen] = useState(false);
  const [snackMsg, setSnackMsg] = useState(false);
  const profile = useContext(profileContext)



  const handleSubmit = async (event) => {
    event.preventDefault();
    let result = await loginQuery()
    if(result.status == 200){

      console.log('profile :>> ', profile);
      setSnackMsg("successfully logged in")
      setOpen(true)
      setTimeout(() => {
        router.replace("/dashboard");
      }, 1000);
    }else{
      setOpen(true)
      setSnackMsg("log in failed")
    }
  };


  const onChangeUsername = (e)=>{
    const { target: { name, value } } = e;
    setUsername(value)
  }

  const onChangePassword = (e)=>{
    const { target: { name, value } } = e;
    setPassword(value)
  }

  const loginQuery = async ()=>{

    let body={
      username:username,
      password:password
    }
    let result = await request("/login",null,"POST",JSON.stringify(body))
    console.log('result :>> ', result);
    if(result){
      profile.name = result.name
      // setProfile({...profile,name:result.name})
      // setProfile({...profile,name:result.name})
    // if(username == "shayan" && password == "123"){
      return { msg: 'success', status: 200}
    }else{
      return { msg: 'fail', statrrorus: 400}
    }
  }


  return (
    <div style={{ textAlign: "center" }}>
      <form className={classes.root} onSubmit={handleSubmit}>
        <h4>Login Form</h4>
        <div style={{ flex: 1, flexDirection: "column" }} >
          <Box className={styles.box}>
            <label className={classes.input}  style={{marginTop:10}}>
              Username: 
              <TextField className={styles.input} style={{textAlign:'center', height:5}} type="text" name={username} variant="filled" onChange={onChangeUsername} className={classes.textInput}/>
            </label>
          </Box>

          <Box className={styles.box} style={{marginTop:10}}>
            <label className={classes.input}>
              Password: 
              <TextField className={styles.input} type="text" name={password} variant="filled" onChange={onChangePassword} className={classes.textInput}/>
            </label>
          </Box>
        </div>
        <div style={{marginTop:20}}>
          <Submit className={styles.submit} type="submit" value="Log in"/>
        </div>
      </form>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={()=>setOpen(false)}
        message={snackMsg}
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={()=>setOpen(false)}>
              UNDO
            </Button>
            {/* <IconButton size="small" aria-label="close" color="inherit" onClick={()=>console.log("closed")}>
              <CloseIcon fontSize="small" />
            </IconButton> */}
          </React.Fragment>
        }
      />
    </div>
  );
}