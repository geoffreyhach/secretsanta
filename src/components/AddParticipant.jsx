import React, { useState, useRef } from "react";
import Joi from "joi";
import { Button, Stack, TextField, Typography } from "@mui/material";

const schema = Joi.object({
    name: Joi.string().trim().min(3).max(15),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .trim()
        .required(),
});

function AddEmail({ participants, setParticipants }) {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const [error, setError] = useState();
    const [newParticipant, setNewParticipant] = useState({
        email: "",
        name: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const { error } = schema.validate({
            name: newParticipant.name,
            email: newParticipant.email,
        });

        if (!error) {
            if (
                !participants.filter(
                    (participant) => participant.email === newParticipant.email
                ).length > 0
            ) {
                if (newParticipant.name === "") {
                    newParticipant.name = newParticipant.email.split("@")[0];
                }
                setParticipants([...participants, newParticipant]);
                setError();
                nameRef.current.value = "";
                emailRef.current.value = "";
            } else setError("Email déjà ajouté");
        } else setError(error.message);
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <Typography color="error">{error}</Typography>}

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextField
                    id="outlined-required"
                    label="Name"
                    placeholder="Name"
                    inputRef={nameRef}
                    onChange={(e) => {
                        setNewParticipant({
                            name: e.target.value,
                            email: newParticipant.email,
                        });
                    }}
                />
                <TextField
                    required
                    id="outlined-required"
                    inputRef={emailRef}
                    label="Email"
                    placeholder="Email"
                    onChange={(e) => {
                        setNewParticipant({
                            email: e.target.value,
                            name: newParticipant.name,
                        });
                    }}
                />

                <Button variant="outlined" type="submit">
                    Ajouter participant
                </Button>
            </Stack>
        </form>
    );
}

export default AddEmail;
