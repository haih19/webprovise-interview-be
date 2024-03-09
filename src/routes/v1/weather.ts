import express from "express";
import { appRoutes } from "../path-constant";
import { getGeoCoordinates } from "../../controllers/weather";

const routes = express.Router();

routes.get(appRoutes.weather.current, getGeoCoordinates);

export default routes;
