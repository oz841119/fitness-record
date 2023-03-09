import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import LeftDrawer from './LeftDrawer'
function TopNav() {
    const [lineUserId, setLineUserId] = useState<string | null>(null)
    useEffect(() => {
        setLineUserId(window.localStorage.getItem('lineUserId'))
    }, [])

    const [isDrawer, setIsDrawer] = useState<boolean>(false)
    const toggleDrawer = () => {
        setIsDrawer(!isDrawer)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={toggleDrawer} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon/>
                    </IconButton>
                    <LeftDrawer isOpen={isDrawer} toggleDrawer={toggleDrawer}/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        首頁
                    </Typography>
                    <Button color="inherit">{lineUserId}</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TopNav