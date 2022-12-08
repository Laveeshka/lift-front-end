import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CommonChip from "../common/Chip/CommonChip";
import { useState } from "react";

function ExercisesList({ sxList, exerciseItems }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const listItemButtons = exerciseItems.map((exerciseItem, index) => (
    <>
      {" "}
      <ListItemButton
        justifyContent="space-between"
        key={index}
        selected={selectedIndex === index + 1}
        onClick={(event) => handleListItemClick(event, index + 1)
        }
      >
        <ListItemText primary={exerciseItem.name} />
        <CommonChip label={exerciseItem.area} />
      </ListItemButton>
      <Divider />
    </>
  ));

  return <List sx={sxList}>
        {listItemButtons}
  </List>;
}

export default ExercisesList;
