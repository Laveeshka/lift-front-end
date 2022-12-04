import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Tabnav from "./components/tabs/Tabs";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Summary from "./pages/Summary/Summary";
import Workout from "./pages/Workout/Workout";

function App() {
  return (
    <Container maxWidth="sm">
      <BrowserRouter>
      <Tabnav />
      <Routes>
          <Route path="/" element={<Workout />}></Route>
          <Route path="/workout" element={<Workout />}></Route>
          <Route path="/summary" element={<Summary />}></Route>
      </Routes>
      </BrowserRouter>

    </Container>
  );
}

export default App;
