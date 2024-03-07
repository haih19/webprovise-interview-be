import express from "express";
import { config } from "dotenv";
import { geoCoordinatesServices } from "../services/geo-coordinates";

config();

export const getGeoCoordinates = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const city = req.query?.city;
    const response = await geoCoordinatesServices.getGeoCoordinates(
      String(city)
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
  }
};
