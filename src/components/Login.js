import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AuthContext } from '../components/context/auth-context';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import Navbar from './Navbar';

const root = {
  background: '#262C3A',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const paperStyle = {
  padding: 30,
  height: 310,
  width: 400,
  margin: '10% auto',
};

const downText = {
  color: '#303F9F',
  textAlign: 'center',
};

const avatarStyle = { backgroundColor: '#303F9F' };
const btnstyle = { margin: '25px 0' };

const Login = () => {
  const context = useContext(AuthContext);
  const history = useHistory();

  const [username, setUsername] = useState('');

  const auth = JSON.parse(localStorage.getItem('auth'));

  const handleLogin = (e) => {
    e.preventDefault();

    if (auth === null) {
      alert('no user found!');
    }
    const same = auth.filter((d) => d.username === username);

    if (same.length !== 0) {
      localStorage.setItem('user', username);
      context.LoginAuth(username);
      history.push('/');
    } else {
      alert(username + ' not exist!');
      setUsername('');
    }
  };

  return (
    <div style={root}>
      <Grid>
        <Navbar />
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle} />
            <h2>Sign In</h2>
            {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            style={btnstyle}
            fullWidth
            onClick={handleLogin}
          >
            Sign in
          </Button>
          <p style={downText}>
            Dont have an account? <Link to="/register">Sign up here</Link>
          </p>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
