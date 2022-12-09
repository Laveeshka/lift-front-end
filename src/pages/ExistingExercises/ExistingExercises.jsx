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

function ExistingExercises() {
  const listStyles = {
    width: "100%",
  };

  const { exercises, setExercises, isExercisesLoaded } =
    useContext(ExercisesContext);
  const [displayedExercises, setDisplayedExercises] = useState(exercises);
  const navigate = useNavigate();
  let distinctAreas;
  let filteredExercises;

  if (isExercisesLoaded) {
    console.log("exercises are ", exercises);
    const areas = exercises.map((exercise) => exercise.area);
    distinctAreas = areas.filter(
      (area, index) => areas.indexOf(area) === index
    );
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
          items={distinctAreas}
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
        <CommonButton color="heading" variant="outlined">Create Exercise</CommonButton>
      </Stack>) : null }
    </Box>
  );
}

export default ExistingExercises;
