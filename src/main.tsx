import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HashRouter basename="/">
    <App />
  </HashRouter>
);
