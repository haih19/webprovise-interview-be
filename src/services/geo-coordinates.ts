import axios, { AxiosResponse } from "axios";
import { config } from "dotenv";
import { GET_GEO_COORDINATES_ENDPOINTS } from "./endpoints/geo-coordinates";
import {
  GeoCoordinatesItem,
  GeoCoordinatesResponse,
} from "types/geo-coordinates";
import { Units } from "../helpers/enum";

config();

const getGeoCoordinates = async (
  cityName: string,
  unit: Units = Units.standard
): Promise<GeoCoordinatesItem | undefined> => {
  try {
    const response: AxiosResponse<GeoCoordinatesResponse[]> = await axios.get(
      `${process.env.WEATHER_SERVICE_URL}${GET_GEO_COORDINATES_ENDPOINTS}?q=${cityName}&units=${unit}&appid=${process.env.WEATHER_API_KEY}`
    );
    const data: GeoCoordinatesItem[] = response?.data?.map((item) => ({
      name: item?.name,
      lat: item?.lat,
      lon: item?.lon,
      country: item?.country,
    }));
    return data?.length ? data[0] : undefined;
  } catch (error) {
    console.error("Error fetching geo coordinates:", error);
    return undefined;
  }
};

export const geoCoordinatesServices = {
  getGeoCoordinates,
};
