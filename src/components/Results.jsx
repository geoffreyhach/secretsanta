import React, { useState } from "react";
import Joi from "joi";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import ResultItem from "./ResultItem";
import emailjs from "@emailjs/browser";

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

    const sendEmails = () => {
        const serviceID = "service_bqtfayt";
        const templateID = "template_rs4lz1f";

        results.forEach((email) => {
            const form = {
                organizer_name: organizer.name,
                organizer_email: organizer.email,
                to_name: email.name1,
                to_email: email.email,
                name: email.name2,
            };
            // console.log(email.name1);
            // console.log(email.name2);
            // console.log(email.email);
            emailjs.sendForm(serviceID, templateID, form, "kcZQrlI6KOz4AF0p7");
        });

        // console.log(results);
        // console.log(organizer);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { error } = schema.validate({
            name: organizer.name,
            email: organizer.email,
        });

        if (!error) {
            setError("");
            sendEmails();
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
