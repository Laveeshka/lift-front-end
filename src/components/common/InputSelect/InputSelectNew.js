import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function InputSelectNew({ label, items, formHelperText, onAreaChange }) {

    const handleChange = (event) => {
        onAreaChange(event.target.value);
        
    }

    //items an array prop passed to the InputSelect component
    const menuItems = items.map((item, index) => <MenuItem key={index+1} value={item}>{item}</MenuItem>)

    return (
        <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel id={`simple-select-helper-${label}-label`}>{label}</InputLabel>
            <Select
                labelId={`simple-select-helper-${label}-label`}
                id={`simple-select-helper-${label}`}
                label={`"${label}"`}
                onChange={handleChange}
            >
                <MenuItem key={0} value="">
                    <em>None</em>
                </MenuItem>
                {menuItems}
            </Select>
            <FormHelperText>{formHelperText}</FormHelperText>
        </FormControl>
    )
}

export default InputSelectNew;