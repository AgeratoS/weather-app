// Weather types
export type Temperature = number;
export type Pressure = number;
export type FeelsLike = number;
export type Humidity = number;

export type Weather = {
  temp: Temperature,
  pressure: Pressure,
  feels_like: FeelsLike,
  humidity: Humidity
}