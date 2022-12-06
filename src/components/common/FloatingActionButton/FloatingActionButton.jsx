import Fab from '@mui/material/Fab';

function FloatingActionButton({ children, color, variant }){
    return(
        <Fab color={color} variant={variant}>
            {children}
        </Fab>
    )
}

export default FloatingActionButton;