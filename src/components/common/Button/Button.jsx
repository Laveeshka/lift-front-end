import Button from '@mui/material/Button';

function CommonButton({ children, color, disabled, size, variant, sx, handleClick }){
    return (
        <Button onClick={handleClick} color={color} disabled={disabled} size={size} variant={variant} sx={sx}>
            {children}
        </Button>
    )
}

export default CommonButton;