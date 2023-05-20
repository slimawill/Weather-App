import './App.css';
import { useState, useEffect } from "react";

function App() {

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

return (
  <div className='app flex flex-col items-center'>
    <h1 className="py-4 text-5xl text-white font-serif">Search Weather</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            className="px-4 py-3"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            />
          <button type="submit" className="px-4 py-3 bg-purple-500 text-white">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
