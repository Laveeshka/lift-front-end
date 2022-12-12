import React, { useState } from "react";

//Create the Context object
const WorkoutContext = React.createContext();

//Create a provider component. The provider component will give access to the context data to its child components
function WorkoutProvider({ children }) {
    const [workout, setWorkout] = useState(null);
    const [time, setTime] = useState({minutes: 0, seconds: 0})
    const [workoutExercises, setWorkoutExercises]  = useState(null);
    const [exerciseSets, setExerciseSets] = useState(null);

    //value prop of the provider will be context data
    //this value will be available 
    return <WorkoutContext.Provider value={{ workout, setWorkout, time, setTime, workoutExercises, setWorkoutExercises, exerciseSets, setExerciseSets }}>{children}</WorkoutContext.Provider>
}

export { WorkoutContext, WorkoutProvider };
