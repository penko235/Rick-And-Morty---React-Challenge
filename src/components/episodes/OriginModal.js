import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OriginCard from './OriginCard';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {

  },
}));

const styleCloseBtn = {
  position: 'absolute',
  top: '0',
  right: '5px'
}
// MODAL
const DialogTitle = withStyles()((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography align='center'  variant="h4">{children}</Typography>
      {onClose ? (
        <IconButton
        style={styleCloseBtn}
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
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const OriginModal = (props) => {
  const classes = useStyles();

  const [origin, setOrigin] = useState(false);
  const [originChar, setOriginChar] = useState({});

  const getAllChar = async () => {
    await axios
      .get(props.char.url)
      .then((response) => {
        setOriginChar(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllChar();
  }, []);

  console.log(originChar);

  const closeOrigin = () => {
    setOrigin(false);
  };
  const showOrigin = () => {
    setOrigin(true);
  };

  return (
    <div>
      <Button
        fullWidth={true}
        onClick={showOrigin}
        size="medium"
        variant="outlined"
        color="primary"
      >
        Origin
      </Button>
      <Dialog
      fullWidth={true}
      maxWidth={'lg'}
     
        onClose={closeOrigin}
        aria-labelledby="customized-dialog-title"
        open={origin}
      >
        <DialogTitle id="customized-dialog-title" onClose={closeOrigin}>
         Origin Name: {originChar.name}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <Grid container spacing={4}>
              {originChar.residents &&
                originChar.residents.length > 0 &&
                originChar.residents.map((char, index) => {
                  return (
                    <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
                      <OriginCard key={index} char={char} />
                    </Grid>
                  );
                })}
                {!originChar.residents && (
                  <h1>No characters</h1>
                )}
            </Grid>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default OriginModal;
