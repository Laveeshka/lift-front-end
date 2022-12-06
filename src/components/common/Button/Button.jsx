import Button from '@mui/material/Button';

function CommonButton({ children, color, disabled, size, variant, sx }){
    return (
        <Button color={color} disabled={disabled} size={size} variant={variant} sx={sx}>
            {children}
        </Button>
    )
}

export default CommonButton;