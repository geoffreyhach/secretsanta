import React, { useState } from "react";
import Joi from "joi";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import ResultItem from "./ResultItem";

const schema = Joi.object({
    name: Joi.string().trim().min(3).max(25),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .trim()
        .required(),
});

function Results({ results }) {
    const [organizer, setOrganizer] = useState({ name: "", email: "" });
    const [error, setError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { error } = schema.validate({
            name: organizer.name,
            email: organizer.email,
        });

        if (!error) {
            setError("");
            console.log(organizer);
        } else setError(error.message);
    };

    return (
        <Box display="flex" flexDirection="column">
            {results.map((couple) => (
                <ResultItem key={results.indexOf(couple)} couple={couple} />
            ))}
            <form onSubmit={handleSubmit}>
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    sx={{
                        marginTop: "2rem",
                    }}
                >
                    <TextField
                        required
                        id="outlined-required"
                        label="Nom de l'organisateur"
                        placeholder="Nom de l'organisateur"
                        onChange={(e) => {
                            setOrganizer({
                                email: organizer.email,
                                name: e.target.value,
                            });
                        }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        placeholder="Email"
                        onChange={(e) => {
                            setOrganizer({
                                email: e.target.value,
                                name: organizer.name,
                            });
                        }}
                    />

                    <Button
                        type="submit"
                        variant="outlined"
                        disabled={
                            organizer.name === "" || organizer.email === ""
                        }
                        sx={{
                            padding: ".9rem",
                        }}
                    >
                        Envoyer Emails
                    </Button>
                </Stack>
                {error && (
                    <Typography color="error" sx={{ marginTop: "1rem" }}>
                        {error}
                    </Typography>
                )}
            </form>
        </Box>
    );
}

export default Results;
