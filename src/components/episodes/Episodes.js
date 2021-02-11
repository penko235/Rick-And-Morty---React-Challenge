import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1400px',
    margin: '0 auto',
    height: '100%'
  },
  heading: {
    marginTop: '5em',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  pagination: {
    textAlign: 'center',
    '& button': {
      padding: '5px 30px',
      marginRight: '5px',
      cursor: 'pointer',
      color: '#B5EDFC',
      backgroundColor: '#6D6D6D',
    },
    '& button:hover': {
      color: '#000',
      backgroundColor: '#B5EDFC',
    }
  },
}));

const Episodes = () => {
  const classes = useStyles();

  const [episodes, setEpisodes] = useState([]);
  const [infoObject, setInfoObject] = useState({});

  const getAllEpisodes = async (page = 1) => {
    let numberPage;
    if (page) {
      numberPage = `?page=${page}`;
    } else {
      numberPage = '';
    }

    await axios
      .get(`https://rickandmortyapi.com/api/episode${numberPage}`)
      .then((response) => {
        setInfoObject(response.data.info);
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

  let pageArr = [];
  for (let number = 1; number <= infoObject.pages; number++) {
    pageArr.push(
      <button onClick={() => getAllEpisodes(number)}>{number}</button>
    );
  }

  return (
    <div>
      <h1 className={classes.heading}>Rick & Mortey Episodes</h1>
      <div className={classes.pagination}>
        {pageArr}
      </div>
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
