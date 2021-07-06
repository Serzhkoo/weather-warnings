import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { weatherAPI } from '../../api/weatherAPI';
import { Description } from '../Description/Description';
import { Instruction } from '../Instruction/Instruction';
import { SimpleBackdrop } from '../../forms/Preloader';
import { FeatureType, ResponseWeatherType } from '../../types/types';

type WeatherPropsType = {
  stateName: string
}

export const Weather: React.FC<WeatherPropsType> = ({ stateName }) => {
  const [weather, setWeather] = useState<ResponseWeatherType>({} as ResponseWeatherType);
  const classes = useStyles();

  useEffect(() => {
    weatherAPI.getWeather(stateName)
      .then(response => setWeather(response.data));
  }, [stateName]);

  if (!weather.features) {
    return <SimpleBackdrop/>;
  }

  return (
    <>
      <div className={classes.headerText}>{weather.title}</div>
      <div className={classes.rootWeather}>
        {weather.features.map((weatherFeatures: FeatureType) => {

          return (
            <Card className={classes.root} key={weatherFeatures.id}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.areaTitle}
                >
                  {weatherFeatures.properties.event}
                </Typography>
                {weatherFeatures.properties.areaDesc.length ? weatherFeatures.properties.areaDesc.split(';').map((area: string, index) => {

                  return (
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      key={area + index}
                    >
                      {area}
                    </Typography>
                  );
                }) : null}
              </CardContent>
              <CardActions className={classes.buttonContainer}>
                <Instruction weather={weatherFeatures}/>
                <Description weather={weatherFeatures}/>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
};

const useStyles = makeStyles({
  rootWeather: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 100
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 40
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: 300,
    backgroundColor: '#F8F8F8',
    margin: 10
  },
  buttonContainer: {
    order: 0,
    flex: '1 1 auto',
    alignSelf: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  areaTitle: {
    textAlign: 'center',
    fontSize: 20
  }
});