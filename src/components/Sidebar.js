import { Box, Button, Divider, LinearProgress, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Typography } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import React from "react";
import { Add, ChangeHistoryRounded, DirectionsRun } from "@mui/icons-material";

const Sidebar = () => {

    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    let daysInMonth = 0;
    
    if (currentMonth === 2) {
        const isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || currentYear % 400 === 0;
        daysInMonth = isLeapYear ? 28 : 29;
    } else if (currentMonth !== 4 || currentMonth !== 6 || currentMonth !== 9 || currentMonth !== 11) {
        daysInMonth = 31;
    } else {
        daysInMonth = 30;
    }

    const currentDay = currentDate.getDate();
    const progress = currentDay / daysInMonth * 100;
    currentMonth = currentDate.toLocaleString('default', { month: 'long' });

    const UpcomingRaceBox = styled("Box")(({ theme }) => ({
        paddingTop: "30px",
        display:"flex",
        alignItems:"center",
        gap:"39px",
    }));

    return ( 
        <Box
            alignContent="center"
            bgcolor="white"
            flex={1.5} p={2}
            sx={{ display: {xs: "none", sm: "block"} }}
        >
            <Typography variant="h6"> {currentMonth + " " + currentYear} </Typography>
            <LinearProgress variant="determinate" color="secondary" value={progress} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
            </LocalizationProvider>
            <Divider sx={{ borderBottom: '3px solid #2580a1' }}/>
            <UpcomingRaceBox>
                <Typography variant="h6">Upcoming Races</Typography>
                <Button color="secondary" variant="contained" startIcon={<Add/>}>New Race</Button>
            </UpcomingRaceBox>
            <List
                sx={{ width: '100%' }}
                aria-label="contacts"
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DirectionsRun />
                        </ListItemIcon>
                        <ListItemText primary="St. George Marathon" secondary="October 7, 2023" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ChangeHistoryRounded/>
                        </ListItemIcon>
                        <ListItemText primary="Ironman 70.3 Victoria" secondary="May 26, 2024" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ChangeHistoryRounded/>
                        </ListItemIcon>
                        <ListItemText primary="Ironman Copenhagen" secondary="August 18, 2024" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
     );
}
 
export default Sidebar;