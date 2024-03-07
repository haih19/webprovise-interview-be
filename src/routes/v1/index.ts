import express from "express";
import geoCoordinates from "./geo-coordinates";

const router = express.Router();

router.use(geoCoordinates);

export default router;
