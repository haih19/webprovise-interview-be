import express from "express";
import { appRoutes } from "../path-constant";
import { getGeoCoordinates } from "../../controllers/geo-coordinates";

const routes = express.Router();

routes.get(appRoutes.geoCoordinates.getGeoCoordinates, getGeoCoordinates);

export default routes;
