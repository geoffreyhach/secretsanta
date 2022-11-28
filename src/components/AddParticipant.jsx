import React, { useState, useRef } from "react";
import Joi from "joi";
import { Button, Grid, TextField, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

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
                ).length > 0 &&
                !participants.filter(
                    (participant) => participant.name === newParticipant.name
                ).length > 0
            ) {
                if (newParticipant.name === "") {
                    newParticipant.name = newParticipant.email.split("@")[0];
                }
                setParticipants([...participants, newParticipant]);
                setError();
                nameRef.current.value = "";
                emailRef.current.value = "";
                nameRef.current.focus();
            } else setError("Merci d'éviter les doublons d'email ou de nom.");
        } else setError(error.message);
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <Typography color="error">{error}</Typography>}

            <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent="center"
                sx={{ marginTop: "1rem" }}
            >
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
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
                </Grid>
                <Grid item xs={12} sm={7}>
                    <TextField
                        required
                        fullWidth
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
                </Grid>

                <Grid item xs={4} sm={1}>
                    <Button
                        variant="contained"
                        type="submit"
                        fullWidth
                        sx={{ height: "100%" }}
                    >
                        <PersonAddIcon fontSize="large" />
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default AddEmail;
