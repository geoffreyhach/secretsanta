import { Box, Button, Card, Typography } from "@mui/material";
import "./App.css";
import AddEmail from "./components/AddParticipant";
import ParticipantsList from "./components/ParticipantsList";

function App() {
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
                <AddEmail />
                <ParticipantsList />
                <Button>Valider</Button>
            </Card>
        </Box>
    );
}

export default App;
