import { useContext } from 'react';
import { ExercisesContext } from "./../../context/exercises";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import CommonIconButton from '../../components/common/IconButton/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function ExistingExercises(){
    const {exercises, setExercises, isExercisesLoaded} = useContext(ExercisesContext);
    const navigate = useNavigate();

    if (isExercisesLoaded){
        console.log("exercises are ", exercises);
    }

    function handleClickBackButton(){
        navigate("/workout");
    }

    return (
        <Box sx={{
            width: "90%",
            height: "100vh",
            margin: "auto",
            paddingTop: 1,
            position: "relative",
          }}>
            <CommonIconButton color="heading" size="small" handleClick={handleClickBackButton}>
                <ArrowBackIosIcon/>
            </CommonIconButton>
        </Box>
    )
}

export default ExistingExercises;