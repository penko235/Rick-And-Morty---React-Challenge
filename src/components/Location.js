import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1600px',
    margin: '0 auto',
  },
  heading: {
    color: '#fff',
    marginTop: '5em',
    textAlign: 'center',
  },
}));

const locationUrl = 'https://rickandmortyapi.com/api/location';

const Location = () => {
  const classes = useStyles();

  const [location, setLocation] = useState([]);

  const getAllLocations = async () => {
    await axios
      .get(locationUrl)
      .then((response) => {
        setLocation(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllLocations();
  }, []);

  return (
    <div>
      <h1 className={classes.heading}>Rick & Mortey Location</h1>
      <Grid container spacing={4} className={classes.root}>
        {location.map((location, index) => {
          return (
            <Grid key={index} item xs={12} lg={3}>
              <LocationCard
                name={location.name}
                type={location.type}
                dimension={location.dimension}
                created={location.created}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default Location;
