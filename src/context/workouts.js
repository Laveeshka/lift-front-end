import React, { useState, useEffect } from 'react'
import { sinatraApiBaseUrl } from '../utils/api';

const WorkoutsContext  = React.createContext();

function WorkoutsProvider({ children }){
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch(`${sinatraApiBaseUrl}/workouts`)
            .then(res => res.json())
            .then(workoutsData => {
                setWorkouts(workoutsData);
                console.log("Fetched workouts are: ",workoutsData);
            })
    }, [])

    return <WorkoutsContext.Provider value={{workouts, setWorkouts}}>{children}</WorkoutsContext.Provider>
}

export { WorkoutsContext, WorkoutsProvider }