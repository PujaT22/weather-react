import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="WeatherApp">
          <Weather />
        </div>
      </div>
      <footer>
        <h5 className="source-link container">
          <a href="" target="_blank" rel="noopener noreferrer">
            Open-source code{" "}
          </a>{" "}
          by Pooja
        </h5>
      </footer>
    </div>
  );
}

export default App;
