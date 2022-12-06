import React, { useState } from "react";
import Workout from "../pages/Workout/Workout";

//Create the Context object
const WorkoutContext = React.createContext();

//Create a provider component. The provider component will give access to the context data to its child components
function WorkoutProvider({ children }) {
    const [workout, setWorkout] = useState(null);
    //value prop of the provider will be context data
    //this value will be available 
    return <WorkoutContext.Provider value={{ workout, setWorkout }}>{children}</WorkoutContext.Provider>
}

export { WorkoutContext, WorkoutProvider };
