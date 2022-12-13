import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import CommonChip from "../common/Chip/CommonChip";
import Divider from "@mui/material/Divider";
import CommonButton from "../../components/common/Button/Button";
import ExerciseSet from './ExerciseSet';
import { useState, useContext } from 'react';
import { ExercisesContext } from './../../context/exercises';

function ExerciseCard({workoutExercise, exerciseSets, handleRemoveWorkoutExercise}){

    const { exercises } = useContext(ExercisesContext);

    const exercise = exercises.find((exercise) => exercise.id === workoutExercise.exercise_id)

    const repsComponents = exerciseSets.map((exerciseSet, index) => <ExerciseSet key={index} set={exerciseSet} setNumber={index+1}></ExerciseSet>)

    function handleRemoveExerciseClick(){
        handleRemoveWorkoutExercise(workoutExercise);
    }

    return(
        <Card sx={{ mb: 1.5, mt: 1 }}>
            <CardContent>
                <Stack direction="row" spacing={1}>
                    <Typography variant="subtitle1">{exercise.name}</Typography>
                    <CommonChip label={exercise.area}/>
                </Stack>
            </CardContent>
            <Divider />
            <Stack direction="column" spacing={2} sx={{mt: 1, mb: 1}}>
                {repsComponents}
                <Divider />
                <Stack direction="row" spacing={1} justifyContent="space-around">
                    <CommonButton color="heading" variant="outlined" size="small" handleClick={handleRemoveExerciseClick}>Remove exercise</CommonButton>
                    <CommonButton color="secondary" variant="contained" size="small">Add set</CommonButton>
                </Stack>
            </Stack>
        </Card>
    )
}

export default ExerciseCard;