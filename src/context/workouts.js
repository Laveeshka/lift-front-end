import React, { useState, useEffect } from 'react'

const WorkoutsContext  = React.createContext();

function WorkoutsProvider({ children }){
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9292/workouts")
            .then(res => res.json())
            .then(workoutsData => {
                setWorkouts(workoutsData);
                console.log("Fetched workouts are: ",workoutsData);
            })
    }, [])

    return <WorkoutsContext.Provider value={{workouts, setWorkouts}}>{children}</WorkoutsContext.Provider>
}

export { WorkoutsContext, WorkoutsProvider }