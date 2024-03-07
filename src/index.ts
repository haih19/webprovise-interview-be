import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import { config } from "dotenv";
import router from "./routes";
import { appRoutes } from "./routes/path-constant";

config();

const port = process.env.PORT || 8080;

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

app.use(appRoutes.api, router);

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
