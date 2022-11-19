import { ThemeProvider, createTheme, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "./App.css";
import Footer from "./components/Footer";
import SecretSanta from "./components/SecretSanta";

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
    return (
        <ThemeProvider theme={theme}>
            <Box
                component="main"
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap="3rem"
                minHeight="97vh"
                backgroundColor="secondary.main"
            >
                <Typography variant="h1" component="h1" color="primary">
                    Secret Santa
                </Typography>
                <SecretSanta />
            </Box>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
