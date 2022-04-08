import { useEffect, useState } from "react";
import "./App.css";
import { ReactComponent as Sunny } from "./sunny.svg";
import { ReactComponent as Cloudy } from "./cloudy.svg";
import { ReactComponent as Hail } from "./hail.svg";
import { ReactComponent as PartiallyCloud } from "./partially_cloudy.svg";
import { ReactComponent as RainingWithSun } from "./raining_with_sun.svg";
import { ReactComponent as Raining } from "./raining.svg";
import { ReactComponent as Snowing } from "./snowing.svg";
import { ReactComponent as Thunderstorm } from "./thunderstorm.svg";

const API_KEY = "fe9cb0fe2e4692a7963d9bbee3dbcc03";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState({});
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const search = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&limit=10&appid=${API_KEY}`
      );
      const cities = await response.json();

      setCities(cities);
    };

    if (searchTerm !== "") {
      search();
    }
  }, [searchTerm]);

  useEffect(() => {
    console.log(cities);
  }, [cities]);

  useEffect(() => {
    const searchForecast = async () => {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${selectedCity.lat}&lon=${selectedCity.lon}&appid=${API_KEY}`
      );
      const weatherForecast = await response.json();
      setWeather(weatherForecast.weather[0]);
    };

    if (selectedCity.lat) {
      searchForecast();
    }
  }, [selectedCity]);

  const getIcon = (weather) => {
    const iconsMap = {
      Clouds: <Cloudy />,
      Hail: <Hail />,
      PartiallyCloudy: <PartiallyCloud />,
      rainingWithSun: <RainingWithSun />,
      Rain: <Raining />,
      Snow: <Snowing />,
      Clear: <Sunny />,
      Thunderstorm: <Thunderstorm />,
    };
    return iconsMap[weather.main];
  };

  return (
    <div className="App">
      <div className="searchBar">
        <input
          type="search"
          placeholder="Search for a city"
          id="city_search"
          autocomplete="off"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div className="searchCitiesResults">
          {cities.map((city) => {
            return (
              <div>
                <p
                  onClick={() => {
                    setSelectedCity(city);
                    setCities([]);
                  }}
                >
                  {city.name} {city.country}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {selectedCity.name && (
        <div className="searchCitiesResultsContainer">
          <h1>
            {selectedCity.name} {selectedCity.country} {selectedCity.weather}
          </h1>
          <div className="icons">{getIcon(weather)}</div>
          <div className="weatherDescription">{weather.description}</div>
        </div>
      )}
    </div>
  );
}
export default App;
