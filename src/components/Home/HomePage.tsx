import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

export const HomePage: React.FC = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}> This app displays California, USA and Texas, USA Adverse Events Warning</div>
        </div>
    )
}

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 100
    }
});