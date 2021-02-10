import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OriginModal from './OriginModal';
import LocationModal from './LocationModal';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    '& .MuiPaper-root': {
      margin: '0 auto',
    },
  },
  media: {
    height: 350,
  },
});

const CharCard = ({ props }) => {
  const classes = useStyles();

  const [char, setChar] = useState({});

  const getAllChar = async () => {
    await axios
      .get(props)
      .then((response) => {
        setChar(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllChar();
  }, []);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={char.image} title="" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {char.name}
          </Typography>
          <Typography
            variant="body1"
            component="h3"
            color="textSecondary"
            component="p"
          >
            Status: {char.status}
          </Typography>
          <Typography
            variant="body1"
            component="h3"
            color="textSecondary"
            component="p"
          >
            Species: {char.species}
          </Typography>
          <Typography
            variant="body1"
            component="h3"
            color="textSecondary"
            component="p"
          >
            Gender: {char.gender}
          </Typography>
          {char.origin && char.origin.name && (
            <Typography
              variant="body2"
              component="h3"
              color="textSecondary"
              component="p"
              style={{ fontWeight: 600 }}
            >
              Origin: {char.origin.name}
            </Typography>
          )}
          {char.location && char.location.name && (
            <Typography
              variant="body2"
              component="h3"
              color="textSecondary"
              component="p"
              style={{ fontWeight: 600 }}
            >
              Location: {char.location.name}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
      {char.origin && <OriginModal char={char.origin} />}
      <LocationModal char={char.location} />
    </Card>
  );
};

export default CharCard;
