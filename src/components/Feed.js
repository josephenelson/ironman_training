import { DirectionsBike, DirectionsRun, Waves } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";

const Feed = () => {
    return ( 
        <Box bgcolor="white" flex={4} p={2}>
            <Typography variant="h5">Upcoming Workouts</Typography>
            <List
                sx={{ width: '100%' }}
                aria-label="contacts"
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DirectionsBike />
                        </ListItemIcon>
                        <ListItemText primary="37 mile bike" secondary="August 25" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DirectionsRun />
                        </ListItemIcon>
                        <ListItemText primary="14 mile run" secondary="August 26" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Waves />
                        </ListItemIcon>
                        <ListItemText primary="800 yard swim" secondary="August 27" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
     );
}
 
export default Feed;