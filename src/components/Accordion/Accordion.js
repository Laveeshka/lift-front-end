import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import moment from "moment";

function WorkoutAccordion({ workout }) {
  //function to format completed at time
  function getFormattedCompletedAtTime() {
    const completedTime = moment(workout.completed_at);
    const formattedCompletedTime = completedTime.format(
      "dddd, MMMM Do YYYY hh:mm a"
    );
    return formattedCompletedTime;
  }

  //function to compute the number of exercises
  function getNumberofExercises() {
    console.log("workout is: ", workout);
    const exercisesCount = workout.workout_exercises.length;
    return exercisesCount;
  }

  //function to compute the number of completed sets
  function getNumberOfCompletedSets() {
    const workout_exercises = workout.workout_exercises;
    let count = 0;
    if (workout_exercises.length !== 0) {
      workout_exercises.forEach((workout_exercise) => {
        const sets = workout_exercise.workout_sets;
        const completedSets = sets.filter((set) => set.completed === true);
        count = count + completedSets.length;
      });
    }
    return count;
  }

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Grid container spacing={2}>
          <Grid item mobile={4}>
            <Typography variant="subtitle2">Completed</Typography>
          </Grid>
          <Grid item mobile={8}>
            <Typography variant="body2">
              {getFormattedCompletedAtTime()}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item mobile={4}>
            <Typography variant="subtitle2">Exercises</Typography>
          </Grid>
          <Grid item mobile={8}>
            <Typography sx={{textAlign: "right"}} variant="body2">{getNumberofExercises()}</Typography>
          </Grid>
          <Grid item mobile={12}>
            {" "}
            <Divider />
          </Grid>
          <Grid item mobile={4}>
            <Typography variant="subtitle2">Sets</Typography>
          </Grid>
          <Grid item mobile={8}>
            <Typography sx={{textAlign: "right"}} variant="body2">
              {getNumberOfCompletedSets()}
            </Typography>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}

export default WorkoutAccordion;
