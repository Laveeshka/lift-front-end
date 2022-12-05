import EmptyContainer from "../../components/common/EmptyContainer/EmptyContainer";
import pettingImg from "../../illustrations/petting.svg";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FloatingActionButton from "../../components/common/FloatingActionButton/FloatingActionButton";
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CancelIcon from '@mui/icons-material/Cancel';
import CommonButton from "../../components/common/Button/Button";

function Workout() {
  const [workout, setWorkout] = useState();

  const tabmenuHeight = 48;

  return (
    <Box
      sx={{
        width: "90%",
        height: `calc(100vh - ${tabmenuHeight}px)`,
        margin: "auto",
        paddingTop: 2,
        position: "relative"
              }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6">Workout in progress</Typography>
        <Typography variant="h5">00:00</Typography>
      </Stack>
      <EmptyContainer
        stackSpacing={2}
        imageAlt="dog petting"
        imageSrc={pettingImg}
        h3text="Save the pats for later"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
        btnText="Start Workout"
        btnVariant="contained"
      ></EmptyContainer>
      <Stack sx={{padding: '2rem 0'}} direction="row" justifyContent="center">
        <FloatingActionButton color="primary" variant="circular" ><PauseIcon/></FloatingActionButton>
      </Stack>
      <Stack sx={{position: "absolute", bottom: "2rem", width: "100%"}}
      direction="row" justifyContent="center" alignItems="center">
        <CommonButton variant="text" color="heading" size="small"><CancelIcon sx={{paddingRight: 0.5}} fontSize="small"/>Discard workout</CommonButton>
      </Stack>
    </Box>
  );
}

export default Workout;
