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
    <div className="App">
      <h1 class="text-blue-600 font-bold text-3xl">Weather App</h1>
    </div>
  );
}

export default App;
