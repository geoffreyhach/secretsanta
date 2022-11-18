import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Generate({ participants, setResults }) {
    const handleGenerate = (participants) => {
        const results = [];
        const shuffledArr = participants.sort((a, b) => 0.5 - Math.random());

        shuffledArr.forEach((participant, index) => {
            let nextIndex = index + 1;
            if (nextIndex === shuffledArr.length) nextIndex = 0;

            results.push({
                name1: participant.name || participant.email.split("@")[0], //on récupère la première partie de l'email au cas ou le nom est pas renseigné
                name2:
                    shuffledArr[nextIndex].name ||
                    shuffledArr[nextIndex].email.split("@")[0],
                email: participant.email,
            });
        });
        setResults(results);
    };

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            sx={{
                marginTop: "2rem",
            }}
        >
            {participants.length === 1 ? (
                <Typography color="error" sx={{ fontWeight: "bold" }}>
                    Veulliez ajouter encore au moins un participant
                </Typography>
            ) : (
                <Box></Box>
            )}
            <Button
                variant="contained"
                disabled={participants.length <= 1}
                onClick={() => handleGenerate(participants)}
            >
                Générer Secret Santa
            </Button>
        </Box>
    );
}

export default Generate;
