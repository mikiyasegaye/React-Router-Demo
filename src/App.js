import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Routes } from "./routes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router history={createBrowserHistory}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
