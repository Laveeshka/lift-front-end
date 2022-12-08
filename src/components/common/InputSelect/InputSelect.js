import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

function InputSelect({ label, items, formHelperText, onValChange }) {

    const [val, setVal] = useState('');

    const handleChange = (event) => {
        setVal(event.target.value);
        onValChange(val)
    }

    //items an array prop passed to the InputSelect component
    const menuItems = items.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id={`simple-select-helper-${label}-label`}>{label}</InputLabel>
            <Select
                labelId={`simple-select-helper-${label}-label`}
                id={`simple-select-helper-${label}`}
                value={val}
                label={`"${label}"`}
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {menuItems}
            </Select>
            <FormHelperText>{formHelperText}</FormHelperText>
        </FormControl>
    )
}

export default InputSelect;