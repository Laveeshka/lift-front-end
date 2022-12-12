import { useContext, useState } from "react";
import { ExercisesContext } from "./../../context/exercises";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import CommonIconButton from "../../components/common/IconButton/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InputSelect from "./../../components/common/InputSelect/InputSelect";
import ExercisesList from "../../components/ExercisesList/ExercisesList";
import CommonButton from "../../components/common/Button/Button";
import { areaConstants } from "./constants";
import CreateExerciseDialog from "../../components/Dialog/CreateExercise";

function ExistingExercises() {
  const listStyles = {
    width: "100%",
  };

  const exercisesURL = "http://localhost:9292/exercises";

  const { exercises, setExercises, isExercisesLoaded } =
    useContext(ExercisesContext);

  const [displayedExercises, setDisplayedExercises] = useState(exercises);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  let filteredExercises;


  if (isExercisesLoaded) {
    console.log("exercises are ", exercises);
    // const areas = exercises.map((exercise) => exercise.area);
    // distinctAreas = areas.filter(
    //   (area, index) => areas.indexOf(area) === index
    // );
  }

  function handleClickBackButton() {
    navigate("/workout");
  }

  function onValChange(selectedTargetedArea) {
    console.log("Selected targeted area ", selectedTargetedArea);
    //call setFilteredExercises function here
    setFilteredExercises(selectedTargetedArea);
  }

  function setFilteredExercises(selectedTargetedArea) {
    if (selectedTargetedArea === "") {
      filteredExercises = exercises;
      setDisplayedExercises(filteredExercises);
    } else {
      filteredExercises = exercises.filter(
        (exercise) => exercise.area === selectedTargetedArea
      );
      setDisplayedExercises(filteredExercises);
    }
  }

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose(){
    setOpen(false);
  }

  function addNewExercise(name, area){
    //POST request
    //update exercises context
    fetch(exercisesURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name,
            area
        })
    })
        .then(res => res.json())
        .then(newExercise => {
            const updatedExercises = [...exercises, newExercise];
            setExercises(updatedExercises);
            setDisplayedExercises(updatedExercises);
        })
        .catch(err => console.warn(err))
  }

  return (
    <Box
      sx={{
        width: "90%",
        height: "100vh",
        margin: "auto",
        paddingTop: 1,
        position: "relative",
      }}
    >
      <CommonIconButton
        color="heading"
        size="small"
        handleClick={handleClickBackButton}
      >
        <ArrowBackIosIcon />
      </CommonIconButton>
      {isExercisesLoaded ? (
        <InputSelect
          label="Targeted area"
          formHelperText="Filter by targeted area"
          items={areaConstants}
          onValChange={onValChange}
        />
      ) : null}
      {isExercisesLoaded ? (
        <ExercisesList sxList={listStyles} exerciseItems={displayedExercises} />
      ) : null}
      {isExercisesLoaded ? (<Stack spacing={1} justifyContent="flex-start">
      <Typography variant="h6" sx={{ textAlign: "center" }}>
          Try something different?
        </Typography>
        <CommonButton color="heading" variant="outlined" handleClick={handleClickOpen}>Create Exercise</CommonButton>
      </Stack>) : null }
      { isExercisesLoaded ? <CreateExerciseDialog open={open} onClose={handleClose} dialogTitle="Create Exercise" areaItems={areaConstants} formHelperText="Select targeted area" addNewExercise={addNewExercise}></CreateExerciseDialog> : null }
    </Box>
  );
}

export default ExistingExercises;
