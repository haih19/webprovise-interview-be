import axios, { AxiosResponse } from "axios";
import { config } from "dotenv";
import { WEATHER_ENDPOINTS } from "./endpoints/weather";
import { Units } from "../helpers/enum";
import { WeatherResponse } from "../types/weather";

config();

const getWeather = async (
  lat: number,
  lon: number,
  unit: Units = Units.standard
): Promise<WeatherResponse | undefined> => {
  try {
    const response: AxiosResponse<WeatherResponse> = await axios.get(
      `${process.env.WEATHER_SERVICE_URL}${WEATHER_ENDPOINTS}?lat=${lat}&lon=${lon}&units=${unit}&appid=${process.env.WEATHER_API_KEY}`
    );
    return response?.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const weatherServices = {
  getWeather,
};
