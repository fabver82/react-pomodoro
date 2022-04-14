import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./App";
import "../sass/style.scss";
// const app = document.getElementById("app");
// ReactDOM.render(<App />, app);
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
