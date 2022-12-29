import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Tabnav from "./components/tabs/Tabs";
import { BrowserRouter, Routes, Route, useMatch } from "react-router-dom";
import Summary from "./pages/Summary/Summary";
import Workout from "./pages/Workout/Workout";
import ExistingExercises from "./pages/ExistingExercises/ExistingExercises";
import { ThemeProvider } from "@mui/material/styles";
import { liftTheme } from "./liftTheme";
import { WorkoutProvider } from "./context/workout";
import { useState } from "react";

function App() {
  let match = useMatch("/workout/exercises");
  
  console.log(match);


  

  return (
    <ThemeProvider theme={liftTheme}>
      <Box sx={{width: "100%", background: "linear-gradient(180deg, #FF0056 0%, #C78A9F 100%)"}}>
        <Container maxWidth="mobile" sx={{backgroundColor: "background.main"}}>
            { match ? null : <Tabnav /> }
            <Routes>
              <Route path="/" element={<Workout />}></Route>
              <Route path="/workout" element={<Workout />}></Route>
              <Route path="/summary" element={<Summary />}></Route>
              <Route path="/workout/exercises" element={<ExistingExercises />}></Route>
            </Routes>
        </Container>
        </Box>
    </ThemeProvider>
  );
}

export default App;
