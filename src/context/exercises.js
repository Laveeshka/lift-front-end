import React, { useEffect, useState } from "react";

const ExercisesContext = React.createContext();

function ExercisesProvider({ children }) {
  const [exercises, setExercises] = useState([]);
  const [isExercisesLoaded, setIsExercisesLoaded] = useState(false);

  const exercisesURL = `http://${process.env.REACT_APP_SINATRA_API_BASE_URL}/exercises`;

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
