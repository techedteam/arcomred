import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function sanduche() {
    return (
        <IconButton 
                    color="inherit" 
                    size="large" 
                    onClick={() => setOpen(true)}
                    sx={{display:{xs:"flex", sm:"none"}}}>
                        <MenuIcon></MenuIcon>
        </IconButton>
    );
}
