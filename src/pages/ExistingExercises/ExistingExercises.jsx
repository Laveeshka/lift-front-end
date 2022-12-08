import { useContext, useState } from "react";
import { ExercisesContext } from "./../../context/exercises";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import CommonIconButton from "../../components/common/IconButton/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InputSelect from "./../../components/common/InputSelect/InputSelect";
import ExercisesList from "../../components/ExercisesList/ExercisesList";

function ExistingExercises() {
    const listStyles = {
        width: '100%'
    }

  const { exercises, setExercises, isExercisesLoaded } =
    useContext(ExercisesContext);
  //const [targetedAreas, setTargetedAreas] = useState([]);
  const navigate = useNavigate();
  let areas;
  let filteredExercises;

  if (isExercisesLoaded) {
    console.log("exercises are ", exercises);
    areas = exercises.map((exercise) => exercise.name);
    filteredExercises = exercises;
  }

  function handleClickBackButton() {
    navigate("/workout");
  }

  function onValChange(selectedTargetedArea) {
    console.log("Selected targeted area ", selectedTargetedArea);
    //switch statement here
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
          items={areas}
          onValChange={onValChange}
        />
      ) : null}
      {isExercisesLoaded ? (<ExercisesList sxList={listStyles} exerciseItems={filteredExercises}/>) : null}
    </Box>
  );
}

export default ExistingExercises;
