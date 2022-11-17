import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function ParticipantItem({ name, email, participants, setParticipants }) {
    const handleDelete = () => {
        setParticipants(
            participants.filter((participant) => participant.email !== email)
        );
    };

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
        >
            <Typography>{!name ? email.split("@")[0] : name}</Typography>
            <Typography>{email}</Typography>
            <Box>
                <IconButton onClick={handleDelete}>
                    <DeleteIcon color="error" />
                </IconButton>
                <IconButton disabled>
                    <EditIcon color="diasbled" />
                </IconButton>
            </Box>
        </Box>
    );
}

export default ParticipantItem;
