import React, { useState } from 'react';
import Origin from './Origin';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
root:{
  width: '1200px',
}
}));

const LocationModal = (props) => {
  const classes = useStyles();

  const [location, setLocation] = useState(false);

  const closeLocation = () => {
    setLocation(false);
  };
  const showLocation = () => {
    setLocation(true);
  };

  return (
    <div >
      <Button fullWidth={true} onClick={showLocation} size="medium" variant="outlined" color="primary">
        Location
      </Button>
      <Modal
        open={location}
        onClose={closeLocation}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.root}
        >
        {props ?(

        <Origin props={props}/>
        ):(
          <h4>NOT FOUND</h4>
        )}
      </Modal>
    </div>
  );
};
export default LocationModal;
