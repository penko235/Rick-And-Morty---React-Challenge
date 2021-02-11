import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharactersCard from '../episodes/CharactersCard';
import SearchBar from './SearchBar';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1400px',
    margin: '0 auto',
  },
  heading: {
    marginTop: '5em',
    color: '#fff',
    textAlign: 'center',
  },
}));

const characterUrl = 'https://rickandmortyapi.com/api/character';

const Characters = () => {
  const classes = useStyles();

  const [characters, setCharacter] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const getAllCharacters = async () => {
    await axios
      .get(characterUrl)
      .then((response) => {
        setCharacter(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const search = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  useEffect(() => {
    const searchValue = characters.filter((char) =>
      char.name.toLowerCase().includes(searchInput)
    );

    setSearchResult(searchValue);
  }, [searchInput, characters, setSearchResult]);

  return (
    <div>
      <h1 className={classes.heading}>Rick & Mortey Characters</h1>
      <SearchBar searchInput={searchInput} search={search} />

      <Grid container spacing={4} className={classes.root}>
        {searchResult.length > 0 &&
          searchResult.map((characters, index) => {
            return (
              <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
                <CharactersCard
                  char={characters}
                  name={characters.name}
                  status={characters.status}
                  species={characters.species}
                  gender={characters.gender}
                  image={characters.image}
                  created={characters.created}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};
export default Characters;
