import express from "express";
import geoCoordinates from "./geo-coordinates";
import weather from "./weather";

const router = express.Router();

router.use(geoCoordinates);
router.use(weather);

export default router;
