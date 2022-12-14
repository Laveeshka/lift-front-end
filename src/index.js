import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { WorkoutProvider } from "./context/workout";
import { ExercisesProvider } from "./context/exercises";
import { WorkoutsProvider } from "./context/workouts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WorkoutsProvider>
    <WorkoutProvider>
      <ExercisesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ExercisesProvider>
    </WorkoutProvider>
  </WorkoutsProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
