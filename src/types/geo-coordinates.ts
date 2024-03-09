export type LocalNames = {
  [key: string]: string;
};

export type GeoCoordinatesItem = {
  name: string;
  lat: number;
  lon: number;
  country: string;
};

export type GeoCoordinatesResponse = {
  name: string;
  local_names: LocalNames;
  lat: number;
  lon: number;
  country: string;
};
