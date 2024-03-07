import express from "express";
import routerVersion1 from "./v1";
import { appRoutes } from "./path-constant";

const router = express.Router();

router.use(appRoutes.v1, routerVersion1);

export default router;
