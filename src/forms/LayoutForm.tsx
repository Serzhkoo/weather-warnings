import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from 'react-router-dom';
import { Path } from '../routes/Routes';

export const ButtonAppBar: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();

  const showWeatherInCA = () => {
    history.push(Path.WeatherInCA);
  };
  const showWeatherInTX = () => {
    history.push(Path.WeatherInTX);
  };
  const startPage = () => {
    history.push(Path.HOME);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon/>
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={startPage}
          >
            Start Page
          </Typography>
          <Button color="inherit" onClick={showWeatherInCA}>Show warnings for California</Button>
          <Button color="inherit" onClick={showWeatherInTX}>Show warnings for Texas</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(4)
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer'
  }
}));