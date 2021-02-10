import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    flexGrow: 1,
  },
  paper: {
    padding: '8px',
    margin: 'auto',
    maxWidth: 400,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});
const OriginCard = (props) => {
  const classes = useStyles();

  const [originChar, setOriginChar] = useState({});
  
  const getAllChar = async () => {
    await axios
      .get(props.origin)
      .then((response) => {
        setOriginChar(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllChar();
  }, []);

  return (
    <div className={classes.root}>
   
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt="complex"
                src={originChar.image}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={12}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {originChar.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Status: {originChar.status}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Species: {originChar.species}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

    </div>
  );
};

export default OriginCard;
