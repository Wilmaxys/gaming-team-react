import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { RouterConfig } from "./navigation/RouterConfig";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="main2">
          <BrowserRouter>
            <RouterConfig />
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
