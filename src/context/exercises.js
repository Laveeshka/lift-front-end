import React, { useEffect, useState } from "react";
import { sinatraApiBaseUrl } from "../utils/api";

const ExercisesContext = React.createContext();

function ExercisesProvider({ children }) {
  const [exercises, setExercises] = useState([]);
  const [isExercisesLoaded, setIsExercisesLoaded] = useState(false);

  const exercisesURL = `${sinatraApiBaseUrl}/exercises`;

  useEffect(()=> {
    setIsExercisesLoaded(false);

    fetch(exercisesURL)
    .then((res) => res.json())
    .then((exercisesData) => {
        setExercises(exercisesData);
        setIsExercisesLoaded(true);
    });
  }, [])
  

  return (
    <ExercisesContext.Provider value={{ exercises, setExercises, isExercisesLoaded }}>
      {children}
    </ExercisesContext.Provider>
  );
}

export { ExercisesContext, ExercisesProvider };
