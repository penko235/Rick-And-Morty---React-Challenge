import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 0,
    color: '#EAEAEA',
    backgroundColor: '#3C3E44',
    borderRadius: '10px'
  },
});

const LocationCard = (props) => {
  const classes = useStyles();

  

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="body2" color="#fff" component="p">
            Type: {props.type}
          </Typography>
          <Typography  variant="body2" color="#fff" component="p">
           Dimension: {props.dimension}
          </Typography>
          <Typography variant="body2" color="#fff" component="p">
            Created: {props.created}
          </Typography>
        </CardContent>
      </CardActionArea>
   
    </Card>
  );
};

export default LocationCard;
