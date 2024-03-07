import axios from "axios";
import { config } from "dotenv";
import { baseUrlService } from "../helpers/constant";
import { GET_GEO_COORDINATES_ENDPOINTS } from "./endpoints/geo-coordinates";

config();

const getGeoCoordinates = async (cityName: string) => {
  try {
    const res = await axios.get(
      baseUrlService +
        GET_GEO_COORDINATES_ENDPOINTS +
        `?q=${cityName}&appid=${process.env.WEATHER_API_KEY}`
    );

    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const geoCoordinatesServices = {
  getGeoCoordinates,
};
