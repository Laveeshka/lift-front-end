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

function ExerciseCard({workoutExercise, exerciseSets}){

    const { exercises } = useContext(ExercisesContext);

    const exercise = exercises.find((exercise) => exercise.id === workoutExercise.exercise_id)

    const repsComponents = exerciseSets.map((exerciseSet, index) => <ExerciseSet key={index} set={exerciseSet} setNumber={index+1}></ExerciseSet>)


    return(
        <Card>
            <CardContent>
                <Stack>
                    <Typography variant="subtitle1">{exercise.name}</Typography>
                    <CommonChip label={exercise.area}/>
                </Stack>
            </CardContent>
            <Divider />
            <CardActions>
                {repsComponents}
                <Divider />
                <Stack>
                    <CommonButton></CommonButton>
                    <CommonButton></CommonButton>
                </Stack>
            </CardActions>
        </Card>
    )
}

export default ExerciseCard;