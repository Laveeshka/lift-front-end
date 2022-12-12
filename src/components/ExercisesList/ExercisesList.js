import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CommonChip from "../common/Chip/CommonChip";
import { useState, useContext } from "react";
import { WorkoutContext } from "./../../context/workout";

function ExercisesList({ sxList, exerciseItems }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const { workout, setWorkout, workoutExercises, setWorkoutExercises, exerciseSets, setExerciseSets } = useContext(WorkoutContext);

  const handleListItemClick = (id) => {
    console.log("id is: ", id);
    setSelectedIndex(id);
    console.log("selected exercise id is: ", id);
    //update workoutExercises context object with selected exercise
    //update exerciseSets context objected for selected exercise by adding one set with default values
    postWorkoutExerciseToDb(id);
  };

  // const updateSelectedIndex = async (id) => {
  //   await setSelectedIndex(id)
  // }

  const postWorkoutExerciseToDb = (id) => {
    //POST request for workout exercise
    fetch("http://localhost:9292/workout_exercises", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        workout_id: workout.id,
        exercise_id: id,
      })
    })
      .then(res => res.json())
      .then(newWorkoutExercise => {
        if (workoutExercises){
          const updatedWorkoutExercises = [...workoutExercises, newWorkoutExercise]
          setWorkoutExercises(updatedWorkoutExercises);
        }
        else {
          setWorkoutExercises([newWorkoutExercise]);
        }
        console.log("new workout exercise is: ", newWorkoutExercise);
        postFirstExerciseSetToDb(newWorkoutExercise.id)
      })
      .then(err => console.warn(err))
  }

  const postFirstExerciseSetToDb = (workoutExerciseId) => {
    //create first exercise set with default values
    fetch("http://localhost:9292/workout_sets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        workout_exercise_id: workoutExerciseId,
        weight: 0,
        reps: 0,
        completed: false
      })
    })
      .then(res => res.json())
      .then(newExerciseSet => {
        if (exerciseSets){
          const updatedExerciseSets = [...exerciseSets, newExerciseSet]
          setExerciseSets(updatedExerciseSets)
        }
        else {
          setExerciseSets([newExerciseSet])
        }
        console.log("new exercise set is: ", newExerciseSet)
      })
  }

  const listItemButtons = exerciseItems.map((exerciseItem) => (
    <>
      {" "}
      <ListItemButton
        key={exerciseItem.id}
        selected={selectedIndex === exerciseItem.id}
        onClick={() => handleListItemClick(exerciseItem.id)
        }
      >
        <ListItemText primary={exerciseItem.name} />
        <CommonChip label={exerciseItem.area} />
      </ListItemButton>
      <Divider />
    </>
  ));

  return <List sx={sxList}>
        {listItemButtons}
  </List>;
}

export default ExercisesList;
