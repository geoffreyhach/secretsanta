import { Box, Card, Typography } from "@mui/material";
import { useState } from "react";
import "./App.css";
import AddParticipant from "./components/AddParticipant";
import Generate from "./components/Generate";
import ParticipantsList from "./components/ParticipantsList";
import Results from "./components/Results";

function App() {
    const [participants, setParticipants] = useState([
        { email: "je.suis.geoffrey.hach@gmail.com", name: "Geoffrey" },
        { email: "rens@gmail.com", name: "Rens" },
        { email: "yavuz@gmail.com", name: "Yavuz" },
        { email: "lebgdu67@gmail.com" },
    ]);
    const [results, setResults] = useState();

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            minHeight="100vh"
            backgroundColor="darkgreen"
        >
            <Typography variant="h1" component="h1" color="red">
                Secret Santa
            </Typography>
            <Card
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: "5px solid red",
                    minWidth: "600px",
                    padding: "2rem",
                }}
            >
                {!results && (
                    <>
                        <AddParticipant
                            participants={participants}
                            setParticipants={setParticipants}
                        />
                        <ParticipantsList
                            participants={participants}
                            setParticipants={setParticipants}
                        />
                        <Generate
                            participants={participants}
                            setResults={setResults}
                        />
                    </>
                )}

                {results && <Results results={results} />}
            </Card>
        </Box>
    );
}

export default App;
