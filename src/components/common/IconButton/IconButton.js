import IconButton from '@mui/material/IconButton';

function CommonIconButton({ children, color, disabled, size, variant, sx, handleClick }){
    return(
        <IconButton 
        color={color}
        disabled={disabled}
        size={size}
        variant={variant}
        sx={sx}
        onClick={handleClick}
        >{children}</IconButton>
    )
}

export default CommonIconButton;