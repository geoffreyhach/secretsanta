import React from "react";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import AddParticipant from "./AddParticipant";
import Generate from "./Generate";
import ParticipantsList from "./ParticipantsList";
import Results from "./Results";

function SecretSanta() {
    const [participants, setParticipants] = useState([
        { email: "je.suis.geoffrey.hach@gmail.com", name: "Geoffrey" },
        { email: "rens@gmail.com", name: "Rens" },
    ]);
    const [results, setResults] = useState();
    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                border: "10px solid",
                borderColor: "primary.main",
                borderRadius: "5px",
                padding: "2rem",
            }}
        >
            {!results && (
                <>
                    <AddParticipant
                        participants={participants}
                        setParticipants={setParticipants}
                    />
                    {participants.length === 0 ? (
                        <Typography>
                            Ajoutez votre premier participant !
                        </Typography>
                    ) : (
                        <ParticipantsList
                            participants={participants}
                            setParticipants={setParticipants}
                        />
                    )}
                    <Generate
                        participants={participants}
                        setResults={setResults}
                    />
                </>
            )}

            {results && <Results results={results} />}
        </Card>
    );
}

export default SecretSanta;
