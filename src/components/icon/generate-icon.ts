import {
  clearDay,
  clearNight,
  cloudy,
  fog,
  hail,
  partlyCloudyDay,
  partlyCloudyNight,
  rain,
  sleet,
  snow,
  thunderstorm,
  tornado,
  wind
} from './svg/index';

const toCamel = (name) => {
    return name.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

export default (icon, width, height) => {
  const icons = {
    clearDay,
    clearNight,
    cloudy,
    fog,
    hail,
    partlyCloudyDay,
    partlyCloudyNight,
    rain,
    sleet,
    snow,
    thunderstorm,
    tornado,
    wind
  };

  icon = toCamel(icon);

  var i = icons[icon](width, height);

  return i;
}
