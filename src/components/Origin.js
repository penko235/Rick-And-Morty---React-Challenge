import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import OriginCard from './OriginCard';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '15px 237px;',
  
  },
}));

const Origin = ({ props }) => {

  const classes = useStyles();
  const [origin, setOrigin] = useState({});

  const getAllChar = async () => {
    await axios
      .get(props.char.url)
      .then((response) => {
        setOrigin(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllChar();
  }, []);

  return (
    <>
      <Grid container spacing={4} className={classes.root}>
        {origin.residents &&
          origin.residents.map((origin, index) => {
            return (
              <Grid item md={3}>
                <OriginCard key={index} origin={origin} />
              </Grid>
            );
          })}
          {origin.residents && origin.residents.length === 0 && (
            <h1>There are no residents</h1>
          )}
      </Grid>
    </>
  );
};

export default Origin;
