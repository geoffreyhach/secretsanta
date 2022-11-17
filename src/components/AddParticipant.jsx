import { Box, Button, TextField } from "@mui/material";
import React from "react";

function AddEmail() {
    return (
        <form>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "2rem",
                    width: "100%",
                    marginBottom: "2rem",
                }}
            >
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Email"
                />
                <TextField
                    id="outlined-required"
                    label=""
                    defaultValue="Name"
                />
                <Button>Ajouter participant</Button>
            </Box>
        </form>
    );
}

export default AddEmail;
