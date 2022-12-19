import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CommonTextField from "../common/TextField/TextField";
import CommonButton from "../common/Button/Button";
import InputSelectNew from "../common/InputSelect/InputSelectNew";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useState } from "react";

function CreateExerciseDialog(props) {
  const {
    onClose,
    open,
    dialogTitle,
    areaItems,
    formHelperText,
    addNewExercise,
  } = props;

  //state here
  const [selectedArea, setSelectedArea] = useState("");
  const [exerciseName, setExerciseName] = useState("");

  const handleClose = () => {
    onClose();
  };

  function handleCancelClick() {
    //close dialog
    //reset dialog input values
    setSelectedArea("");
    setExerciseName("");
    onClose();
  }

  function handleSaveClick() {
    //invoke callback function here to update exercises context
    //invoke callback function here to post new exercise to db
    addNewExercise(exerciseName, selectedArea);
    onClose();
  }

  function handleTextFieldChange(event) {
    if (event.target.value !== "") {
      setExerciseName(event.target.value);
      console.log("new exercise name is: ", exerciseName);
    }
  }

  const handleTargetedAreaChange = (value) => {
    //perform state change logic for targered area here
    if (value !== "") {
      setSelectedArea(value);
      console.log("Selected area is: ", selectedArea);
    }
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        <Stack>
          <CommonTextField
            id="new-exercise-name"
            label="Name"
            variant="outlined"
            helperText="Enter name of exercise"
            defaultValue=""
            handleChange={handleTextFieldChange}
          ></CommonTextField>
          <InputSelectNew
            label="Targeted area"
            items={areaItems}
            formHelperText={formHelperText}
            onAreaChange={handleTargetedAreaChange}
          ></InputSelectNew>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Grid container spacing={2}>
          <Grid item mobile={6}>
            <CommonButton
              sx={{ width: "100%" }}
              color="heading"
              variant="outlined"
              handleClick={handleCancelClick}
            >
              Cancel
            </CommonButton>
          </Grid>
          <Grid item mobile={6}>
            <CommonButton
              sx={{ width: "100%" }}
              color="primary"
              variant="contained"
              handleClick={handleSaveClick}
            >
              Create
            </CommonButton>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog>
  );
}

export default CreateExerciseDialog;
