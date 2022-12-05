import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { useParams, useNavigate, Link } from 'react-router-dom';

function Tabnav() {
  const [value, setValue] = useState(0);

  
  return (
      <Tabs
        centered
        variant="fullWidth"
        value={value}
        onChange={(e, val) => setValue(val)}
      >
        <Tab component={Link} label="Workout" to="/workout"/>
        <Tab component={Link} label="Summary" to="/summary"/>
      </Tabs>
  );
}

export default Tabnav;
