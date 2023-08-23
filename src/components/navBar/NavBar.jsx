import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavListDrawer from "./NavListDrawer";
import { Box, AppBar, Button, Drawer, IconButton, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import LogoARP from "../Logo/LogoARP";


const theme = createTheme(
    {
        palette: {
            primary: {
                main:'#25516E',
            },
        },
    }
);

export function NavBarDesktop({navArrayLinks}){ 
    return(
        <>
            <ThemeProvider theme={theme}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Box>
                        <LogoARP width={50} height={50}></LogoARP>
                    </Box>
                    <Typography variant="h6" sx={{flexGrow:1}}>
                        
                    </Typography>
                    
                    <Box>
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
            
        </>
    )
}

export function NavBarMobile({navArrayLinks}){ 
    const [open, setOpen] = useState(false);
    
    return(
        <>
            <ThemeProvider theme={theme}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <IconButton 
                    color="inherit" 
                    size="large" 
                    onClick={() => setOpen(true)}
                    >
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Box sx={{ml:25}} >
                        <LogoARP width={50} height={50}></LogoARP>
                    </Box> 
                </Toolbar>
            </AppBar>
            </ThemeProvider>
            <Drawer open={open} anchor='left' onClose={() => setOpen(false)} >
                <NavListDrawer navArrayLinks={navArrayLinks} setOpen={setOpen} />    
            </Drawer>
            
        </>
    )
}