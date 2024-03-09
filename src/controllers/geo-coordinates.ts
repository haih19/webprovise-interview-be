import express from "express";
import { config } from "dotenv";
import { geoCoordinatesServices } from "../services/geo-coordinates";
import { IApiResponse } from "../types";
import { GeoCoordinatesItem } from "../types/geo-coordinates";
import { Units } from "../helpers/enum";

config();

interface GeoQueryParams {
  city: string;
  units: Units;
}

export const getGeoCoordinates = async (
  req: express.Request<{}, {}, {}, GeoQueryParams>,
  res: express.Response<IApiResponse<GeoCoordinatesItem | null>>
): Promise<express.Response<IApiResponse<GeoCoordinatesItem | null>>> => {
  try {
    const city = req.query?.city;
    const units = req.query?.units;
    if (typeof city !== "string" || !city) {
      return res.status(400).json({
        status: 400,
        message:
          "Bad request: city query parameter is required and must be a string.",
        content: null,
      });
    }

    const response = await geoCoordinatesServices.getGeoCoordinates(
      city,
      units
    );

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
