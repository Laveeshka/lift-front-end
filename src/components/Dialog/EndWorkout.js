import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CommonButton from "../common/Button/Button";
import { Stack } from "@mui/material";

function EndWorkoutDialog(props) {
  const { onClose, open, dialogTitle, handleUpdateWorkout } = props;

  function handleClose(){
    onClose();
  }

  function handleCancelClick(){
    onClose();
  }

  function handleConfirmClick(){
    handleUpdateWorkout();
    onClose();
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{dialogTitle}</DialogTitle>
      <DialogContent>
        Once you complete this workout, you can look back at its activity in the
        Summary tab
      </DialogContent>
      <DialogActions>
        <Stack>
          <CommonButton color="heading" variant="outlined" handleClick={handleCancelClick}>Cancel</CommonButton>
          <CommonButton color="primary" variant="contained" handleClick={handleConfirmClick}>Confirm</CommonButton>
        </Stack>
      </DialogActions>
    </Dialog>
  );
}

export default EndWorkoutDialog;
