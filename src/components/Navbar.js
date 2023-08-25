import { AccountCircle, CalendarMonth, DirectionsBike, DirectionsRun, Landscape, Waves } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
});

const Icons = styled("Box")(({ theme }) => ({
    display:"none",
    alignItems:"center",
    gap:"12px",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}));

const UserBox = styled("Box")(({ theme }) => ({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return ( 
        <AppBar position="sticky">
            <StyledToolbar sx={{ backgroundColor:"white"}}>
                <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"10px"}
                >
                    <Landscape color="primary" sx={{display:{xs:"block", sm:"block"}}} fontSize="large"/>
                    <Typography variant="h4" color="primary" sx={{display:{xs:"none", sm:"block"}}}>
                        IRONMAN TRAINING
                    </Typography>
                </Box>
                <Icons>
                    <Button color="secondary" variant="contained" endIcon={<Waves/>}>Swim</Button>
                    <Button color="secondary" variant="contained" endIcon={<DirectionsBike/>}>Bike</Button>
                    <Button color="secondary" variant="contained" endIcon={<DirectionsRun/>}>Run</Button>
                    <Button color="secondary" variant="contained" endIcon={<CalendarMonth/>}>Calendar</Button>
                    <IconButton variant="contained" color="secondary">
                        <AccountCircle onClick={e=>setOpen(true)}/>
                    </IconButton>
                </Icons>
                <UserBox>
                    <AccountCircle onClick={e=>setOpen(true)}/>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
     );
}
 
export default Navbar;