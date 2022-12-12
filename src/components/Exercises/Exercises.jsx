import EmptyContainer from "../common/EmptyContainer/EmptyContainer";
import runningImg from "../../illustrations/running.svg";
import { useContext } from "react";
import { WorkoutContext } from "./../../context/workout";

function Exercises({ handleAddExercise }){

  const { workout, setWorkout, workoutExercises, setWorkoutExercises, exerciseSets, setExerciseSets } = useContext(WorkoutContext);

    if (!workoutExercises){
      return (<EmptyContainer
        stackSpacing={2}
          imageAlt="freestyling human"
          imageSrc={runningImg}
          h3text="Are we freestyling?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
          btnText="Add exercise"
          btnVariant="contained"
          handleClick={handleAddExercise}
        >
        </EmptyContainer>)
    }
    return(
        <>
        </>
    )
}

export default Exercises;