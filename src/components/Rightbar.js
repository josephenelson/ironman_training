import { Add, CreateOutlined } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import React from "react";

const Rightbar = () => {
    return ( 
        <Box flex={2.5} p={2} sx={{ display: {xs: "none", sm: "block"} }}>
            <Typography variant="h6">Tools</Typography>
            <List
                sx={{ width: '100%' }}
                aria-label="contacts"
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Add />
                        </ListItemIcon>
                        <ListItemText primary="Add Finished Workout"/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Add />
                        </ListItemIcon>
                        <ListItemText primary="Add Goal" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <CreateOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Plan Week"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
     );
}
 
export default Rightbar;