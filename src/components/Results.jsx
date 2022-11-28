import React, { useEffect, useState } from "react";
import Joi from "joi";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import ResultItem from "./ResultItem";
import axios from "axios";

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
    const [recap, setRecap] = useState("");
    const [isSent, setIsSent] = useState(false);

    useEffect(() => {
        let message = `Bonjour ${organizer.name}, voici les résultats du Secret Santa \n`;
        results.forEach((couple) => {
            message += `${couple.name1} doit offrir un cadeau à ${couple.name2} \n`;
        });
        setRecap(message);
    }, [results, organizer]);

    const sendEmail = (email, organizer, name1, name2) => {
        const data = {
            email: email,
            organizer: organizer,
            name1: name1,
            name2: name2,
        };
        axios
            .post("https://secretsanta-api.vercel.app/sendemails", data, {
                "Content-Type": "application/json",
            })
            .then((res) => console.log(res))
            .catch((err) => console.warn(err));
    };

    const sendRecap = (email, msg) => {
        const data = {
            email: email,
            text: msg,
        };

        axios
            .post("https://secretsanta-api.vercel.app/sendrecap", data, {
                "Content-Type": "application/json",
            })
            .then((res) => console.log(res))
            .catch((err) => console.warn(err));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { error } = schema.validate({
            name: organizer.name,
            email: organizer.email,
        });

        if (!error) {
            results.forEach((user) => {
                const { email, name1, name2 } = user;

                sendRecap(organizer.email, recap);
                sendEmail(email, organizer.name, name1, name2);
            });

            setError("");
            setIsSent(true);
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
                            organizer.name === "" ||
                            organizer.email === "" ||
                            isSent === true
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
                {isSent && (
                    <Typography
                        color="error"
                        sx={{ marginTop: "1rem", fontWeight: "bold" }}
                    >
                        Les e-mails ont bien été envoyé à tous les
                        participtant·e·s ! Vous avez également reçu un
                        récapitulatif dans voitre boite mail.
                    </Typography>
                )}
            </form>
        </Box>
    );
}

export default Results;
