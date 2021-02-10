import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 0,
    borderRadius: '10px'
  },
  
});

const CharactersCard = (props) => {

  const classes = useStyles();
  
  return (
    <Card className={classes.root}>
    
      <CardActionArea>
      <CardMedia
          component="img"
          alt="img"
          height="auto"
          image={props.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Status: {props.status}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Species: {props.species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Gender: {props.gender}
          </Typography>
         
          <Typography variant="body2" color="textSecondary" component="p">
            Created: {props.created}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
};

export default CharactersCard;
