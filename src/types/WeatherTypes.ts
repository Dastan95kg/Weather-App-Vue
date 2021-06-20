export type AddressDataType = {
  administrative_area_level_1: string;
  administrative_area_level_2: string;
  country: string;
  latitude: number;
  locality: string;
  longitude: number;
};

export type PlaceResultType = {
  address_components: Array<object>
  adr_address: string
  formatted_address: string
  geometry: object
  html_attributions: object
  icon: string
  name: string
  photos: Array<object>
  place_id: string
  types: Array<string>
  url: string
  utc_offset: number
  utc_offset_minutes: number
  vicinity: string
}

export type WeatherType = {
  cityName: string
  temperature: number
  country: string
  description: string
  feels_like: number
  humidity: number
  dayOrNight: string
  definition: string
  windSpeed: number
  pressure: number
}