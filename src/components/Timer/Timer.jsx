import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState, useEffect, useContext } from 'react';
import { WorkoutContext } from "./../../context/workout";

function Timer({ isPaused }) {
//const [time, setTime] = useState({minutes: 0, seconds: 0}) 
const { time, setTime } = useContext(WorkoutContext);


useEffect(() => {
    const timer = setInterval(() => {
        if (isPaused === false) {
            console.log("isPaused is ", isPaused)
            if (time.seconds === 59){
                setTime({...time, minutes: ++time.minutes})
                setTime({...time, seconds: time.seconds = 0})
                console.log("minutes are ", time.minutes)
                console.log("seconds are ", time.seconds)
            } else if (time.seconds !== 59 ){
                setTime({...time, seconds: ++time.seconds})
                console.log("seconds are not 59 yet")
                console.log("minutes are ", time.minutes)
                console.log("seconds are ", time.seconds)
            }
        }
       
    }, 1000)

    return function() {
        clearInterval(timer)
      }

}, [isPaused])


    let display = '';
    if (time.seconds < 10 && time.minutes < 10){
        display = `0${time.minutes}:0${time.seconds}`;
    }
    else if (time.seconds < 10 && time.minutes > 9){
        display = `${time.minutes}:0${time.seconds}`;
    }
    else if (time.seconds > 9 && time.minutes > 9){
        display = `${time.minutes}:${time.seconds}`;
    } else if (time.seconds > 9 && time.minutes < 10){
        display = `0${time.minutes}:${time.seconds}`;
    }


  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="h6">Workout in progress</Typography>
      <Typography variant="h5">{display}</Typography>
    </Stack>
  );
}

export default Timer;
