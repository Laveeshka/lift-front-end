import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from 'react';

function Timer() {
const [time, setTime] = useState({minutes: 0, seconds: 0}) 

useEffect(() => {
    const timer = setInterval(() => {
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
    }, 1000)

    return function() {
        clearInterval(timer)
      }

}, [])


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
