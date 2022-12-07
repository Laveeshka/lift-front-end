import Fab from '@mui/material/Fab';

function FloatingActionButton({ handleClick, children, color, variant }){
    return(
        <Fab onClick={handleClick} color={color} variant={variant}>
            {children}
        </Fab>
    )
}

export default FloatingActionButton;