import React, { useContext } from 'react';
import { AuthContext } from '../components/context/auth-context';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Iconrm from '../img/icon.png'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appbar: {
    background: 'none',
    fontFamily: 'Nunito',
  },
  appbarWrapper: {
    width: '100%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  nav: {
    color: '#fff',
    fontSize: '1.5em',
    textDecoration: 'none',
    padding: '10px',
    margin: '0 10px',
    fontWeight: 'bold',
  },
  colorText: {
    color: '#B5EDFC',
    textDecoration: 'none',
    textAlign: 'center',
  },
});

const Navbar = () => {
  const classes = useStyles();

  const context = useContext(AuthContext);

  return (
    <div className={classes.root}>
      {/* elevation={0} */}
      <AppBar position="absolute" className={classes.appbar} > 
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            <Link to="/" className={classes.colorText}>
              <img width={50}  src={Iconrm}></img>
              Rick & Morty
            </Link>
          </h1>

          {context.loggedIn ? (
            <>
              <Link className={classes.nav} to="/episodes">
                Episodes
              </Link>
              <Link className={classes.nav} to="/location">
                Location
              </Link>
              <Link className={classes.nav} to="/characters">
                Characters
              </Link>
              <Link to="/">
                <span className={classes.nav} onClick={context.Logout}>
                  Logout [{localStorage.getItem('user')}]
                </span>
              </Link>
            </>
          ) : (
            <>
              <Link className={classes.nav} to="/login">
                Login
              </Link>
              <Link className={classes.nav} to="/register">
                Register
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
