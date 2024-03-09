import { HeaderItem } from "./../helpers/enum";
import { IncomingHttpHeaders } from "http";
import { Request } from "express";
import { Units } from "../helpers/enum";

export type IApiResponse<T> = {
  status: number;
  message: string;
  content: T;
};

interface CustomHeaders {
  [HeaderItem.unitPreference]?: Units;
}

export type CustomRequest<T = {}> = Request<{}, {}, {}, T> & {
  headers: IncomingHttpHeaders & CustomHeaders;
};
