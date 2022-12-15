import Box from "@mui/material/Box";
import { useContext, useEffect, useState } from "react";
import { WorkoutsContext } from "./../../context/workouts";
import EmptyContainer from "../../components/common/EmptyContainer/EmptyContainer";
import levitateImg from "../../illustrations/levitate.svg";
import { useNavigate } from "react-router-dom";

function Summary() {
  const { workouts, setWorkouts } = useContext(WorkoutsContext);
  const [ check, setCheck ] = useState(true);
  const tabmenuHeight = 48;
  const navigate = useNavigate();

    useEffect(() => {
        isWorkoutsNotEmpty();
    }, [check])

  const isWorkoutsNotEmpty = () => {
    setCheck(workouts.length !== 0 ? true : false);
    console.log("isWorkoutNotEmpty is: ", check);
  }

  function handleStartWorkout(){
    navigate("/");
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
        {check ? null : <EmptyContainer 
            stackSpacing={2}
          imageAlt="Lounging lady"
          imageSrc={levitateImg}
          h3text="Nothing to show, lazy bones"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna."
          btnText="Start a workout"
          btnVariant="contained"
          handleClick={handleStartWorkout}/>}
    </Box>
  );
}

export default Summary;
