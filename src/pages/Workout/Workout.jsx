import EmptyContainer from "../../components/common/EmptyContainer/EmptyContainer";
import pettingImg from "../../illustrations/petting.svg";
import { useState, useContext } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FloatingActionButton from "../../components/common/FloatingActionButton/FloatingActionButton";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CancelIcon from "@mui/icons-material/Cancel";
import CommonButton from "../../components/common/Button/Button";
import Timer from "../../components/Timer/Timer";
import Exercises from "../../components/Exercises/Exercises";
import { WorkoutContext } from "./../../context/workout";
import { useNavigate } from "react-router-dom";
import moment from 'moment';

function Workout() {
  //isPaused state
  const [isPaused, setIsPaused] = useState(false);
  //call useContext with WorkoutContext
  const { workout, setWorkout, time, setTime } = useContext(WorkoutContext);
  const workoutsURL = `http://localhost:9292/workouts`;

  const tabmenuHeight = 48;

  const navigate = useNavigate();

  function handleStartWorkout(){
    //create a new workout and post to db here
    //update workout context
    fetch(workoutsURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            started_at: moment().format()
        })
    })
    .then(res => res.json())
    .then( newWorkout => setWorkout(newWorkout))
  }

  function handlePauseWorkout(){
    setIsPaused(prev => !prev)
    //console.log("isPaused is ", isPaused)
  }

  function handleDiscardWorkout(){
    fetch(`${workoutsURL}/${workout.id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(deletedWorkout => {
        setWorkout(null);
        setTime({...time, seconds: time.seconds = 0});
        setTime({...time, minutes: time.minutes = 0});
    })
  }

  function handleAddExercise(){
    navigate("/workout/exercises");
  }

  return (
    <Box
      sx={{
        width: "90%",
        height: `calc(100vh - ${tabmenuHeight}px)`,
        margin: "auto",
        paddingTop: 2,
        position: "relative",
      }}
    >
      {workout ? <Timer isPaused={isPaused}/> : null}
      {workout ? <Exercises handleAddExercise={handleAddExercise}/> : (
        <EmptyContainer
          stackSpacing={2}
          imageAlt="dog petting"
          imageSrc={pettingImg}
          h3text="Save the pats for later"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
          btnText="Start Workout"
          btnVariant="contained"
          handleClick={handleStartWorkout}
        ></EmptyContainer>
      )}
      {workout ? (
        <Stack
          sx={{
            padding: "2rem 0",
          }}
          direction="row"
          justifyContent="center"
        >
          <FloatingActionButton color="primary" variant="circular" handleClick={handlePauseWorkout}>
            {isPaused ? <PlayArrowIcon /> : <PauseIcon /> }
          </FloatingActionButton>
        </Stack>
      ) : null}

      {workout ? (
        <Stack
          sx={{ position: "absolute", bottom: "2rem", width: "100%" }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <CommonButton variant="text" color="heading" size="small" handleClick={handleDiscardWorkout}>
            <CancelIcon
              sx={{
                paddingRight: 0.5,
              }}
              fontSize="small"
            />
            Discard workout
          </CommonButton>
        </Stack>
      ) : null}
    </Box>
  );
}

export default Workout;
