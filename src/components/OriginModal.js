import React, { useState } from 'react';
import Origin from './Origin';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '1200px',
  },
}));

const OriginModal = (props) => {
  const classes = useStyles();

  const [origin, setOrigin] = useState(false);

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
      <Modal
        open={origin}
        onClose={closeOrigin}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.root}
      >
        {props ? <Origin props={props} /> : <h4>NOT FOUND</h4>}
      </Modal>
    </div>
  );
};
export default OriginModal;
