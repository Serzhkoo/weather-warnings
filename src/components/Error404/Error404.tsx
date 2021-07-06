import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { Path } from '../../routes/Routes';

export const Error404 = () => {

  const myClassName = 'far fa-question-circle fa-spin';
  const history = useHistory();
  const classes = useStyles();

  const showHome = () => {
    history.push(Path.HOME);
  };

  return (
    <div className={classes.body}>
      <div className={classes.mainbox}>
        <div className={classes.err}>4</div>
        <div className={classes.far}><i className={myClassName}/></div>
        <div className={classes.err2}>4</div>
        <div className={classes.msg}>Maybe this page moved? Got deleted?
          Is hiding out in quarantine? Never existed in
          the first place?
          <p>Let's go <span className={classes.a} onClick={showHome}>home</span> and try from there.</p>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles({
  body: {
    backgroundColor: '#95c2de',
    height: '100vh'
  },
  mainbox: {
    backgroundColor: '#95c2de',
    margin: 'auto',
    height: '600px',
    width: '600px',
    position: 'relative'
  },
  err: {
    color: '#ffffff',
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: '11rem',
    position: 'absolute',
    left: '20%',
    top: '8%'
  },
  far: {
    position: 'absolute',
    fontSize: '8.5rem',
    left: '42%',
    top: '15%',
    color: '#ffffff'
  },
  err2: {
    color: '#ffffff',
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: '11rem',
    position: 'absolute',
    left: '68%',
    top: '8%'
  },
  msg: {
    textAlign: 'center',
    fontFamily: 'Nunito Sans, sans-serif',
    fontSize: '1.6rem',
    position: 'absolute',
    left: '16%',
    top: '45%',
    width: '75%'
  },
  a: {
    textDecoration: 'none',
    color: 'white',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
});