import { useContext } from 'react';
import { ExercisesContext } from "./../../context/exercises";
import Box from "@mui/material/Box";


function ExistingExercises(){
    const {exercises, setExercises, isExercisesLoaded} = useContext(ExercisesContext);
    if (isExercisesLoaded){
        console.log("exercises are ", exercises);
    }

    return (
        <Box sx={{
            width: "90%",
            height: "100vh",
            margin: "auto",
            paddingTop: 1,
            position: "relative",
          }}>

        </Box>
    )
}

export default ExistingExercises;