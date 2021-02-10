import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  heading: {
    marginTop: '5em',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold'
  },
}));

const episodeUrl = 'https://rickandmortyapi.com/api/episode';

const Episodes = () => {
  const classes = useStyles();

  const [episodes, setEpisodes] = useState([]);

  const getAllEpisodes = async () => {
    await axios
      .get(episodeUrl)
      .then((response) => {
        setEpisodes(
          response.data.results.sort((a, b) =>
            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          )
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  useEffect(() => {
    getAllEpisodes();
  }, []);

  return (
    <div>
      <h1 className={classes.heading}>Rick & Mortey Episodes</h1>
      <Grid container spacing={4} className={classes.root}>
        {episodes.map((episodes, index) => {
          return (
            <Grid key={index} item xs={12} lg={3}>
              <EpisodeCard
                id={episodes.id}
                name={episodes.name}
                air_date={episodes.air_date}
                episode={episodes.episode}
                created={episodes.created}
                characters={episodes.characters}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default Episodes;
