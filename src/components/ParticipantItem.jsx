import React from "react";
import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function ParticipantItem(props) {
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            sx={{ width: "100%" }}
        >
            <Typography>Geoffrey Hach</Typography>
            <Typography>je.suis.geoffrey.hach@gmail.com</Typography>
            <Box>
                <DeleteIcon color="error" />
                <EditIcon color="primary" />
            </Box>
        </Box>
    );
}

export default ParticipantItem;
