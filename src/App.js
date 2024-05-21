import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Lisbon" />
      <footer>
        This project was coded by{" "}
        <a
          href="https://github.com/marianacreis"
          target="_blank"
          rel="noreferrer"
        >
          Mariana Reis
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/marianacreis/react-final-project"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
