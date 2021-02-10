import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CharCard from './CharCard';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  root: {
    margin: 0,
    padding: '8px',
    borderRadius: '10px',
    color: '#EAEAEA',
    backgroundColor: '#3C3E44',
  },
  dialog: {
    '& .MuiPaper-root': {
      width: '1200px',
    },
  },
  closeButton: {
    position: 'absolute',
    top: '0px',
    right: '5px',
    color: '#000',
  },
  btn: {
    margin: '0 auto',
    backgroundColor: '#B5EDFC',
    color: '#363636',
  },
  textButton: {
    color: '#000',
    '&:hover': {
      color: '#fff',
    },
  },
});

// MODAL

const DialogTitle = withStyles()((props) => {
  const { children, onClose, ...other } = props;
  const classes = useStyles();

  return (
    <MuiDialogTitle  disableTypography MuiDialog-paper {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


const EpisodeCard = (props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography align="center" gutterBottom variant="h6" component="h3">
            Episode: {props.episode}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          className={classes.btn}
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          
        >
          <span className={classes.textButton}>Show Details</span>
        </Button>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          maxWidth="xl"
          className={classes.dialog}
          disableScrollLock={ true }
        >
          <div className={classes.detailsHeading}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
              <Typography align='center' variant="h4" component="h2">
                Detail View
              </Typography>
              <Typography align='center' variant="h6" component="h2">
                Date: {props.air_date}
              </Typography>
            </DialogTitle>
          </div>
          <DialogContent dividers>
            <Typography gutterBottom variant="h5" component="h2">
              <Grid container spacing={8}>
                {props.characters.map((char, index) => {
                  return (
                    <Grid key={index} item md={4}>
                      <CharCard key={index} props={char} />
                    </Grid>
                  );
                })}
              </Grid>
            </Typography>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </CardActions>
    </Card>
  );
};

export default EpisodeCard;
