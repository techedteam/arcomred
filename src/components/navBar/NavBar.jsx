import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavListDrawer from "./NavListDrawer";
import { Box, AppBar, Button, Drawer, IconButton, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LogoARP from "../Logo/LogoARP";


export default function NavBar({navArrayLinks}){ 
    const [open, setOpen] = useState(false);
    const theme = createTheme(
        {
            palette: {
                primary: {
                    main:'#25516E',
                },
            },
        }
    );

    return(
        <>
            <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton 
                    color="inherit" 
                    size="large" 
                    onClick={() => setOpen(true)}
                    sx={{display:{xs:"flex", sm:"none"}}}>
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Box justifyContent={"flex-end"}>
                        <LogoARP width={50} height={50}></LogoARP>
                    </Box>
                    <Typography variant="h6" sx={{flexGrow:1}}>
                        
                    </Typography>
                    
                    <Box sx={{display:{xs:"none", sm:"flex"}}}>
                        {navArrayLinks.map(item => (
                            <Button 
                            color="inherit" 
                            key={item.title} 
                            component={NavLink} 
                            to={item.path}>{item.title}</Button>
                        ))}
                    </Box>
                     
                </Toolbar>
            </AppBar>
            </ThemeProvider>
            <Drawer open={open} anchor='left' onClose={() => setOpen(false)} sx={{display:{xs:"flex", sm:"none"}}}>
                <NavListDrawer navArrayLinks={navArrayLinks} setOpen={setOpen} />    
            </Drawer>
            
        </>
    )
}