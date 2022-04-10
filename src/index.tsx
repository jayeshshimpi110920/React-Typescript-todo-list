import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="box">
      <h2 className="header">Todo list</h2>
      <p className="header">&copy; Jayesh Shimpi</p>
      <App />
    </div>
  </StrictMode>
);
