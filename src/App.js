import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Porto" />
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/marianacreis">Mariana Reis</a> and is{" "}
        <a href="https://github.com/marianacreis/react-final-project">
          open-sourced on GitHub
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
