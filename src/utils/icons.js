import { iconApi } from "../config";

export const getUrlIcon = (data) => {
  const iconCode = data.weather[0].icon;
  return `${iconApi}/${iconCode}@2x.png`;
}