import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle/';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogActions from '@material-ui/core/DialogActions';
import { FeatureType } from '../../types/types';
import { makeStyles } from '@material-ui/core/styles';

type InstructionPropsType = {
  weather: FeatureType
}

export const Instruction: React.FC<InstructionPropsType> = ({ weather }) => {
  const [instructionOpen, setInstructionOpen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setInstructionOpen(true);
  };
  const handleClose = () => {
    setInstructionOpen(false);
  };

  return (
    <div>
      <Button
        size="small"
        color="primary"
        variant="contained"
        onClick={handleClickOpen}
        className={classes.button}
      >
        Instruction
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={instructionOpen}
      >
        <DialogTitle>
          Instruction
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {weather.properties.headline}
          </Typography>
          <Typography gutterBottom>
            {weather.properties.instruction.length ? weather.properties.instruction : 'There are no any instructions.'}
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

const useStyles = makeStyles({
  button: {
    verticalAlign: 'bottom'
  }
})