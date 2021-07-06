import axios from 'axios';

import { ResponseWeatherType } from '../types/types';

const instance = axios.create({
  baseURL: 'https://api.weather.gov/'
});

export const weatherAPI = {
  getWeather(city: string) {
    return instance.get<ResponseWeatherType>(`alerts/active?area=${city}`);
  }
};
