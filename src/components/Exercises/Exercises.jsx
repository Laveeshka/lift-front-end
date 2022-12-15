import EmptyContainer from "../common/EmptyContainer/EmptyContainer";
import runningImg from "../../illustrations/running.svg";
import { useContext, useState } from "react";
import { WorkoutContext } from "./../../context/workout";
import { WorkoutsContext } from "../../context/workouts";
import Stack from "@mui/material/Stack";
import CommonButton from "../../components/common/Button/Button";
import ExerciseCard from "./ExerciseCard";
import EndWorkoutDialog from "../Dialog/EndWorkout";
import { Box } from "@mui/material";
import moment from 'moment';
import { useNavigate } from "react-router-dom";

function Exercises({ handleAddExercise }){

  const { time, setTime, workout, setWorkout, workoutExercises, setWorkoutExercises, exerciseSets, setExerciseSets } = useContext(WorkoutContext);
  const { workouts, setWorkouts } = useContext(WorkoutsContext);

  //set up state for opening and closing the End Workout modal
  const [open, setOpen] = useState(false);

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

  function handleEndWorkout(){
    setOpen(true);
  }

  function handleClose(){
    setOpen(false);
  }

  function handleUpdateWorkout(){
      //PATCH request for workout, update completed_at attribute
      const workoutId = workout.id;
      fetch(`http://localhost:9292/workouts/${workoutId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
          completed_at: moment().format()
        })
      })
        .then(res => res.json())
        .then(updatedWorkout => {
          //update workouts context here
          console.log("updated workout is: ", updatedWorkout);
          const updatedWorkouts = [...workouts, updatedWorkout];
          setWorkouts(updatedWorkouts);
          //end of update workouts context
          setWorkout(null);
          setWorkoutExercises(null);
          setExerciseSets(null);
          setTime({...time, seconds: time.seconds = 0});
          setTime({...time, minutes: time.minutes = 0});

          console.log("Workout has ended!");
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
       return <ExerciseCard key={index} workoutExercise={workoutExercise} exerciseSets={sets} setExerciseSets={setExerciseSets} handleRemoveWorkoutExercise={handleRemoveWorkoutExercise} handleAddSet={handleAddSet}></ExerciseCard>
      })
    }

    return(
        <Box>
        { workoutExercises ? <Stack direction="row" spacing={1}>
          <CommonButton variant="contained" color="primary" handleClick={handleAddExercise}>Add exercise</CommonButton>
          <CommonButton variant="outlined" color="heading" handleClick={handleEndWorkout}>End workout</CommonButton>
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
        { workoutExercises ? <EndWorkoutDialog open={open} onClose={handleClose} dialogTitle="End Workout" handleUpdateWorkout={handleUpdateWorkout}/> : null}
        </Box>
    )
}

export default Exercises;