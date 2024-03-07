import express from "express";
import { appRoutes } from "../path-constant";

const routes = express.Router();

routes.get(appRoutes.weather.current);

export default routes;
