import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function AddEmail({ participants, setParticipants }) {
    const [error, setError] = useState();
    const [newParticipant, setNewParticipant] = useState({
        email: "",
        name: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !participants.filter(
                (participant) => participant.email === newParticipant.email
            ).length > 0
        ) {
            if (newParticipant.name === "") {
                newParticipant.name = newParticipant.email.split("@")[0];
            }
            setParticipants([...participants, newParticipant]);
        } else setError("Email déjà ajouté");
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <Typography color="error">{error}</Typography>}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem",
                    width: "100%",
                    marginBlock: "2rem",
                }}
            >
                <TextField
                    required
                    id="outlined-required"
                    label="Email - Required"
                    placeholder="Email"
                    onChange={(e) => {
                        setNewParticipant({
                            email: e.target.value,
                            name: newParticipant.name,
                        });
                    }}
                />
                <TextField
                    id="outlined-required"
                    label="Name"
                    placeholder="Name"
                    onChange={(e) => {
                        setNewParticipant({
                            name: e.target.value,
                            email: newParticipant.email,
                        });
                    }}
                />
                <Button type="submit">Ajouter participant</Button>
            </Box>
        </form>
    );
}

export default AddEmail;
