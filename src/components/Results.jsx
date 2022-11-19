import React, { useState } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import ResultItem from "./ResultItem";

function Results({ results }) {
    console.log(results);
    const [organizer, setOrganizer] = useState({ name: "", email: "" });

    return (
        <Box display="flex" flexDirection="column">
            {results.map((couple) => (
                <ResultItem key={results.indexOf(couple)} couple={couple} />
            ))}
            <form>
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
            </form>
        </Box>
    );
}

export default Results;
