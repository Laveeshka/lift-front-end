import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from "@mui/material/Stack";
import Typography from '@mui/material/Typography';
import CommonChip from "../common/Chip/CommonChip";
import Divider from "@mui/material/Divider";
import CommonButton from "../../components/common/Button/Button";
import ExerciseSet from './ExerciseSet';
import {  useContext } from 'react';
import { ExercisesContext } from './../../context/exercises';

function ExerciseCard({workoutExercise, exerciseSets, setExerciseSets, handleRemoveWorkoutExercise, handleAddSet}){

    const { exercises } = useContext(ExercisesContext);

    const exercise = exercises.find((exercise) => exercise.id === workoutExercise.exercise_id)

    //new code
    const setsForWorkoutExercise = exerciseSets.filter((set) => set.workout_exercise_id === workoutExercise.id)

    const repsComponents = setsForWorkoutExercise.map((exerciseSet, index) => <ExerciseSet key={index} set={exerciseSet} setNumber={index+1} handleDeleteSetClick={handleDeleteSet} updatedExerciseSetsInContext={updatedExerciseSetsInContext}></ExerciseSet>)

    function handleRemoveExerciseClick(){
        handleRemoveWorkoutExercise(workoutExercise);
    }

    function handleAddSetClick(){
        handleAddSet(workoutExercise);
    }

    function handleDeleteSet(set){
       //delete set logic here
       const setId = set.id;
       fetch(`http://localhost:9292/workout_sets/${setId}`, {
        method: "DELETE"
       })
        .then(res => res.json())
        .then(deletedSet => {
            const updatedExerciseSets = exerciseSets.filter((exerciseSet) => exerciseSet.id !== setId);
            setExerciseSets(updatedExerciseSets);
        })
    }

    function updatedExerciseSetsInContext(updatedSet){
        const filteredExerciseSets = exerciseSets.filter(exerciseSet => 
            exerciseSet.id !== updatedSet.id)
        const updatedExerciseSets = [...filteredExerciseSets, updatedSet];
        setExerciseSets(updatedExerciseSets);
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
                    <CommonButton color="secondary" variant="contained" size="small" handleClick={handleAddSetClick}>Add set</CommonButton>
                </Stack>
            </Stack>
        </Card>
    )
}

export default ExerciseCard;