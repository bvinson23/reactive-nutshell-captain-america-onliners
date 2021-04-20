import ReactWeather, { useOpenWeather } from 'react-open-weather';
export const todayweather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'd59dc1f6992122e296b8623774f76b27',
    lat: '36.1627',
    lon: '86.7816',
    lang: 'en',
    unit: 'imperial',
  });
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Munich"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
  );
};