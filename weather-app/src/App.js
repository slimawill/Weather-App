import './App.css';
import { useState, useEffect } from "react";

function App() {

  const API = "6d994fb4e6fa0c9b7581cbd05a9bf307";
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState();

  const fetchWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d994fb4e6fa0c9b7581cbd05a9bf307&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((error) => console.log(error.message));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className='bg-[#1f2937] h-screen flex flex-col items-center'>
      <h1 className="py-4 text-[#6d88ad] border-b-2 border-dotted mb-2 text-5xl font-serif">Weather App</h1>
        <div className="py-2 px-3">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter city name"
              className="px-4 border-2 rounded-full py-3"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              />
            <button type="submit" className="ml-2 rounded-full px-3 py-3 bg-[#6d88ad] text-white">
              Search
            </button>
          </form>
        </div>

        {weather && (
        <div className="rounded-lg shadow-xl bg-[#6d88ad] text-white w-[300px] h-[350px] flex flex-col justify-center items-center mt-10">
          <h4 className="text-4xl font-bold">{weather.name}</h4>
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt=""
            className="w-[150px]"
          />
          <h2 className="text-4xl font-bold mb-2">{weather.main.temp}&deg;</h2>
          <p>{weather.weather[0].main}</p>
        </div>
      )}
    </div>
  );
}

export default App;
