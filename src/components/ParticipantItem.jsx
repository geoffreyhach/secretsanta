import React, { useState } from "react";
import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";
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
            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "start", sm: "center" }}
                sx={{ width: "100%", minHeight: "2.5rem" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Typography sx={{ fontWeight: "bold" }}>
                    {!name ? email.split("@")[0] : name}
                </Typography>
                <Box display="flex" flexDirection="row" alignItems="center">
                    <Typography>{email}</Typography>

                    {isHovered && (
                        <IconButton onClick={handleDelete}>
                            <DeleteIcon color="error" />
                        </IconButton>
                    )}
                </Box>
            </Stack>
            <Divider />
        </>
    );
}

export default ParticipantItem;
