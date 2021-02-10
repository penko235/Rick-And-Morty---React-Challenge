import React, { useState, useContext } from 'react';
import Navbar from '../views/Navbar';
import { useHistory, Link } from 'react-router-dom';
import { AuthContext } from '../context/Auth-context';
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core';

const root = {
  background: '#262C3A',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
}

const paperStyle = {
  padding: 30,
  height: 310,
  width: 400,
  margin: '10% auto',
};
const downText = {
  color: '#303F9F',
  textAlign: 'center',
}

const avatarStyle = { backgroundColor: '#303F9F' };
const btnstyle = { margin: '25px 0' };

const Register = () => {
  const context = useContext(AuthContext);
  const history = useHistory();

  const [username, setUsername] = useState('');
  const regex = new RegExp(/^[a-zA-z]+$/gim);

  let auth = JSON.parse(localStorage.getItem('auth'));

  const handleSignup = (e) => {
    e.preventDefault();

    if (auth === null) {
      auth = [];
    }

    const same = auth.filter((d) => d.username === username);

    if (same.length === 0 && username.match(regex)) {
      auth = [...auth, { username: username }];
      localStorage.setItem('auth', JSON.stringify(auth));
      localStorage.setItem('user', username);
      setUsername('');

      context.LoginAuth(username);
      history.push('/');
    } else if (!username.match(regex)) {
      alert('Alphabet characters only!');
    } else {
      alert(username + ' is already exist!');
      setUsername('');
    }
  };

  return (
    <div style={root}>
    <Grid>
       <Navbar />
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}></Avatar>
          <h2>Register</h2>
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
          onClick={handleSignup}
        >
          Register Now
        </Button>
       <p style={downText}> Already have an account? <Link to='/login'>Sign in</Link> </p>
      </Paper>
    </Grid>
    </div>
  );
};

export default Register;
