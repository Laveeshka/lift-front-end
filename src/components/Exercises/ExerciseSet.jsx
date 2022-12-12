import Stack from "@mui/material/Stack";
import CommonTextField from '../common/TextField/TextField';
import CommonIconButton from '../common/IconButton/IconButton';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';

function ExerciseSet({set, setNumber}){

    const [completed, setCompleted] = useState(false);

    return(
        <Stack>
        <Typography variant='body2'>Set {setNumber}</Typography>
        <CommonTextField id={`reps-${setNumber}`} label="Reps" variant="outlined" type="number" size="small" defaultValue={set.reps}/>
        <CommonTextField id={`weight-${setNumber}`} label="Weight" variant="outlined" type="number" size="small" defaultValue={set.weight}/>
        <CommonIconButton><DeleteForeverIcon/></CommonIconButton>
        <CommonIconButton>{completed ? <CheckCircleIcon/> : <CheckCircleOutlineIcon/>}</CommonIconButton>
        </Stack>
    )
}

export default ExerciseSet;