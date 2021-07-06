import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import { FeatureType } from '../../types/types';

type DescriptionPropsType = {
  weather: FeatureType
}

export const Description: React.FC<DescriptionPropsType> = ({ weather }) => {
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  const handleClickOpen = () => {
    setDescriptionOpen(true);
  };
  const handleClose = () => {
    setDescriptionOpen(false);
  };

  return (
    <div>
      <Button
        size="small"
        color="secondary"
        variant="contained"
        onClick={handleClickOpen}
      >
        Description
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={descriptionOpen}
      >
        <DialogTitle>
          Description
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {weather.properties.headline}
          </Typography>
          <Typography gutterBottom>
            {weather.properties.description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};