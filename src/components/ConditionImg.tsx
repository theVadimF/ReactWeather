import weatherCodes from '/src/assets/weather_codes.json'

export function ConditionImg( {weatherCode, is_night, className}: {weatherCode: number, is_night: boolean, className: string} ) {
  function getConditionText(code: number) {
    return weatherCodes.weatherCodeFullDay[code];
  }

  let img_last = 0;
  if (is_night) {
    img_last = 1;
  }

  function setImg(weather_code: number) {
    try {
      return require(`/src/assets/weather_icons/large/2x/${weather_code}${img_last}.png`);
    }
    catch(err) {
      return `/src/assets/weather_icons/large/2x/${weather_code}0.png`
    }
  }

  return (
    <img
      src={setImg(weatherCode)}
      alt={getConditionText(weatherCode)}
      className={className}
    />
  )
}