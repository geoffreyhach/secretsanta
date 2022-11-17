import { Box, Button, Typography } from "@mui/material";
import React from "react";

function Results({ results }) {
    return (
        <Box>
            {results.map((couple) => (
                <Typography>
                    {couple[0]} offre un cadeau à {couple[1]}
                </Typography>
            ))}
            <Button>Envoyer Emails</Button>
        </Box>
    );
}

export default Results;
