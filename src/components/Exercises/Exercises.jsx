import EmptyContainer from "../common/EmptyContainer/EmptyContainer";
import runningImg from "../../illustrations/running.svg";
import { useContext } from "react";
import { WorkoutContext } from "./../../context/workout";
import Stack from "@mui/material/Stack";
import CommonButton from "../../components/common/Button/Button";
import ExerciseCard from "./ExerciseCard";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Exercises({ handleAddExercise }){

  const { workout, setWorkout, workoutExercises, setWorkoutExercises, exerciseSets, setExerciseSets } = useContext(WorkoutContext);

  let exerciseCards;
  const navigate = useNavigate();

  function handleAddExercise(){
    navigate("/workout/exercises");
  }

  function handleRemoveWorkoutExercise(workoutExerciseToRemove){
    const id = workoutExerciseToRemove.id;
    fetch(`http://localhost:9292/workout_exercises/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(deletedWorkoutExercise => {
        const updatedWorkoutExercises = workoutExercises.filter(workoutExercise => workoutExercise.id !== id);
        setWorkoutExercises(updatedWorkoutExercises);

        const updatedExerciseSets = exerciseSets.filter(exerciseSet => exerciseSet.workout_exercise_id !== id);
        setExerciseSets(updatedExerciseSets);

      })
  }

  function handleAddSet(workoutExercise){
    const workoutExerciseId = workoutExercise.id;
    fetch(`http://localhost:9292/workout_sets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        workout_exercise_id: workoutExerciseId,
        reps: 0,
        weight: 0,
        completed: false
      })
    })
      .then(res => res.json())
      .then(newExerciseSet => {
        const updatedExerciseSets = [...exerciseSets, newExerciseSet];
        setExerciseSets(updatedExerciseSets);
      })
  }

    // if (!workoutExercises){
    //   return (<EmptyContainer
    //     stackSpacing={2}
    //       imageAlt="freestyling human"
    //       imageSrc={runningImg}
    //       h3text="Are we freestyling?"
    //       text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
    //       btnText="Add exercise"
    //       btnVariant="contained"
    //       handleClick={handleAddExercise}
    //     >
    //     </EmptyContainer>)
    // }

 

    if(workoutExercises){
      console.log(workoutExercises);
      exerciseCards = workoutExercises.map((workoutExercise, index) => {
        //only pass the exercise sets associated to one particular workout exercise
        //how?
        const sets = exerciseSets.filter((exerciseSet) => exerciseSet.workout_exercise_id === workoutExercise.id)
       return <ExerciseCard key={index} workoutExercise={workoutExercise} exerciseSets={sets} handleRemoveWorkoutExercise={handleRemoveWorkoutExercise} handleAddSet={handleAddSet}></ExerciseCard>
      })
    }

    return(
        <Box>
        { workoutExercises ? <Stack direction="row" spacing={1}>
          <CommonButton variant="contained" color="primary" handleClick={handleAddExercise}>Add exercise</CommonButton>
          <CommonButton variant="outlined" color="heading">End workout</CommonButton>
        </Stack> : <EmptyContainer
        stackSpacing={2}
          imageAlt="freestyling human"
          imageSrc={runningImg}
          h3text="Are we freestyling?"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
          btnText="Add exercise"
          btnVariant="contained"
          handleClick={handleAddExercise}
        >
        </EmptyContainer> }
        { workoutExercises ? exerciseCards : null }
        </Box>
    )
}

export default Exercises;