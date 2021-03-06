import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CharCard from '../episodes/CharCard';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 0,
    color: '#EAEAEA',
    backgroundColor: '#3C3E44',
    borderRadius: '10px',
  },
});

// MODAL

const DialogTitle = withStyles()((props) => {
  const { children, onClose, ...other } = props;
  const classes = useStyles();

  return (
    <MuiDialogTitle disableTypography MuiDialog-paper {...other}>
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

const LocationCard = (props) => {
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
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="body2" color="#fff" component="p">
            Type: {props.type}
          </Typography>
          <Typography variant="body2" color="#fff" component="p">
            Dimension: {props.dimension}
          </Typography>
          <Typography variant="body2" color="#fff" component="p">
            Created: {props.created}
          </Typography>
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
            disableScrollLock={true}
          >
            <div className={classes.detailsHeading}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                <Typography align="center" variant="h4" component="h2">
                  Detail View
                </Typography>
              </DialogTitle>
            </div>
            <DialogActions></DialogActions>
          </Dialog>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LocationCard;
