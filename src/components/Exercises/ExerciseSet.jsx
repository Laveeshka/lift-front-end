import Stack from "@mui/material/Stack";
import CommonTextField from "../common/TextField/TextField";
import CommonIconButton from "../common/IconButton/IconButton";
import Typography from "@mui/material/Typography";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState, useEffect } from "react";
import { sinatraApiBaseUrl } from "../../utils/api";

function ExerciseSet({
  set,
  setNumber,
  handleDeleteSetClick,
  updatedExerciseSetsInContext
}) {
  const [completed, setCompleted] = useState(set.completed);
  const [reps, setReps] = useState(set.reps);
  const [weight, setWeight] = useState(set.weight);

  //new code
  let repsValue = reps;
  let weightValue = weight;
  let completedValue = completed;
  //end of new code

  useEffect(() => {
    updateSetInDB(set);
  }, [completed])

  function handleDeleteClick() {
    handleDeleteSetClick(set);
  }

  function handleRepsValueChange(e) {
    //update reps state
    //do not update state if the input field is empty
    if (e.target.value) {
      setReps(e.target.value);
      repsValue = e.target.value;
      console.log("reps are: ", reps);
    }
  }

  function handleWeightValueChange(e) {
    //update weight state
    //do not update state if the input field is empty
    if (e.target.value){
        setWeight(e.target.value);
        weightValue = e.target.value;
        console.log("weight is: ", weight);
    }
    
  }

  function handleCompleteSetClick() {
    //on complete icon button click, toggle completed state
    //PATCH request for set
    completedValue = !completed;
    setCompleted(prev => !prev);
    //updateSetInDB(set);
  }

  function updateSetInDB(set){
    const setId = set.id;
    fetch(`${sinatraApiBaseUrl}/workout_sets/${setId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            reps: repsValue,
            weight: weightValue,
            completed: completedValue,
        })
    })
        .then(res => res.json())
        .then(updatedSet => {
            updatedExerciseSetsInContext(updatedSet);
        })
  }

  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="body2" sx={{ width: "3rem" }}>
        Set {setNumber}
      </Typography>
      <CommonTextField
        id={`reps-${setNumber}`}
        sx={{ width: "4rem" }}
        label="Reps"
        variant="outlined"
        type="number"
        size="small"
        defaultValue={set.reps}
        handleChange={handleRepsValueChange}
      />
      <CommonTextField
        id={`weight-${setNumber}`}
        sx={{ width: "4rem" }}
        label="Weight"
        variant="outlined"
        type="number"
        size="small"
        defaultValue={set.weight}
        handleChange={handleWeightValueChange}
      />
      <CommonIconButton handleClick={handleDeleteClick}>
        <DeleteForeverIcon />
      </CommonIconButton>
      <CommonIconButton handleClick={handleCompleteSetClick}>
        {completed ? <CheckCircleIcon /> : <CheckCircleOutlineIcon />}
      </CommonIconButton>
    </Stack>
  );
}

export default ExerciseSet;
