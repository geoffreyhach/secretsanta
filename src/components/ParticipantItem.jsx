import React, { useState } from "react";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ParticipantItem({ name, email, participants, setParticipants }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleDelete = () => {
        setParticipants(
            participants.filter((participant) => participant.email !== email)
        );
    };

    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: "100%", minHeight: "2.5rem" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Typography>{!name ? email.split("@")[0] : name}</Typography>
                <Box display="flex" flexDirection="row" alignItems="center">
                    <Typography>{email}</Typography>

                    {isHovered && (
                        <IconButton onClick={handleDelete}>
                            <DeleteIcon color="error" />
                        </IconButton>
                    )}
                </Box>
            </Box>
            <Divider />
        </>
    );
}

export default ParticipantItem;
