import React, { useEffect, useState} from 'react';
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import backgroundImage from '../img/rick-and-morty-background.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },

  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#B5EDFC',
    textDecoration: 'none',
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontFamily: 'Nunito',
    fontSize: '4rem',
  },
  container: {
    textAlign: 'center',
  },
  codeIcon: {
    color: '#B5EDFC',
    fontSize: '6rem',
  },
  img: {
    width: 210,
  },
});

export const Header = () => {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

const redirectUrl = () => {
  window.location.href='https://github.com/penko235';
}
  return (
    <div className={classes.root}>
      <Navbar />
      <Collapse
        in={checked}
        {...(checked ? { timeout: 2000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome To
            <img className={classes.img} src={backgroundImage}></img>{' '}
            <span className={classes.colorText}>Rick & Morty </span>
            <br />
            React Challenge
          </h1>
          <IconButton>
            <GitHubIcon onClick={redirectUrl} className={classes.codeIcon} />
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
};
export default Header;
