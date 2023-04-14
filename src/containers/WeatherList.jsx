import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader/Loader';
import TempComp from '../components/TempratureComponent/TempComp';
import actions from '../store/action/SgaActions';

function WeatherList() {
  const dispatch = useDispatch();
  const { cityData, weatherData, isLoading } = useSelector((state) => ({
    cityData: state.weather.selectedLocation,
    weatherData: state.weather.weather,
    isLoading: state.weather.isLoading,
  }));

  const getWeatherDetails = useCallback(() => {
    dispatch({
      type: actions.FETCH_WEATHER,
      data: { latitude: cityData.latitude, longitude: cityData.longitude },
    });
  }, [cityData.latitude, cityData.longitude, dispatch]);

  useEffect(() => {
    if (Object.keys(cityData).length > 0) {
      getWeatherDetails();
    }
  }, [getWeatherDetails, cityData]);
  return (
    <div className="p-4 overflow-hidden">
      {isLoading  ? (
        <div className='py-10 grid place-items-center'>
        <Loader />
        </div>
      ) : (
        <>
          {Object.keys(cityData).length > 0 && (
            <div className="w-max border bg-slate-300 p-2 rounded-xl my-2">
              <p className="font-bold">
                {`City:- `}
                <span className="!font-semibold">{cityData?.name}</span>
              </p>
              <p className="font-bold">
                {`Latitude:- `}
                <span className="!font-semibold">{cityData?.latitude}</span>
              </p>
              <p className="font-bold">
                {`Longitude:- `}
                <span className="!font-semibold">{cityData?.longitude}</span>
              </p>
            </div>
          )}
          <div className="grid grid-cols-6 gap-2">
            {weatherData?.hourly?.temperature_2m.map((weather, index) => (
              <TempComp
                weather={weather}
                temp_unit={weatherData?.hourly_units?.temperature_2m}
                time={weatherData?.hourly?.time[index]}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default WeatherList;
