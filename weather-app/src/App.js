import './App.css';
import { useState, useEffect } from "react";

function App() {

  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState();

  return (
    <div className="App">
      <h1 class="text-blue-600 font-bold text-3xl">Weather App</h1>
    </div>
  );
}

export default App;
