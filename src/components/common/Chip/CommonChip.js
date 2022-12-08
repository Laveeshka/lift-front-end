import Chip from '@mui/material/Chip';

function CommonChip({ label, variant, size, color }){
    return (
        <Chip label={label} variant={variant} size={size} color={color}></Chip>
    )
}

export default CommonChip;