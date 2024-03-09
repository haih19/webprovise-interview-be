import express from "express";
import { config } from "dotenv";
import { IApiResponse, CustomRequest } from "../types";
import { HeaderItem } from "../helpers/enum";
import { weatherServices } from "../services/weather";
import { WeatherResponse } from "../types/weather";

config();

interface GeoQueryParams {
  lat: number;
  lon: number;
}

export const getGeoCoordinates = async (
  req: CustomRequest<GeoQueryParams>,
  res: express.Response<IApiResponse<WeatherResponse | null>>
): Promise<express.Response<IApiResponse<WeatherResponse | null>>> => {
  try {
    const lat = req.query?.lat;
    const lon = req.query?.lon;
    const units = req.headers[HeaderItem.unitPreference];

    if (!lat || !lon) {
      return res.status(400).json({
        status: 400,
        message:
          "Bad request: latitude and longitude query parameters are required",
        content: null,
      });
    }

    const response = await weatherServices.getWeather(lat, lon, units);

    return res.status(200).json({
      status: 200,
      message: "Success",
      content: response || null,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
      content: null,
    });
  }
};
