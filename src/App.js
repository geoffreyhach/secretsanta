import {
    Box,
    Card,
    Typography,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import { useState } from "react";
import colors from "./config/colors.json";
import "./App.css";
import AddParticipant from "./components/AddParticipant";
import Generate from "./components/Generate";
import ParticipantsList from "./components/ParticipantsList";
import Results from "./components/Results";
import Footer from "./components/Footer";

const theme = createTheme({
    typography: {
        h1: { fontFamily: "Lobster" },
        fontFamily: "Roboto",
    },
    palette: {
        primary: {
            main: "#e4501c",
        },
        secondary: {
            main: "#044c3c",
        },
    },
});

function App() {
    const [participants, setParticipants] = useState([
        // { email: "je.suis.geoffrey.hach@gmail.com", name: "Geoffrey" },
        // { email: "rens@gmail.com", name: "Rens" },
        // { email: "yavuz@gmail.com", name: "Yavuz" },
        // { email: "lebgdu67@gmail.com" },
    ]);
    const [results, setResults] = useState();

    return (
        <ThemeProvider theme={theme}>
            <main>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    gap="3rem"
                    minHeight="97vh"
                    backgroundColor={colors.green}
                >
                    <Typography variant="h1" component="h1" color="primary">
                        Secret Santa
                    </Typography>
                    <Card
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            border: "10px solid",
                            borderColor: "primary.main",
                            borderRadius: "5px",
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
                </Box>
            </main>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
