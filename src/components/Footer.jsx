import React from "react";
import { Box, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer(props) {
    return (
        <footer>
            <Box
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
                gap=".5rem"
                sx={{
                    padding: ".5rem",
                    backgroundColor: "primary.main",
                }}
            >
                <Typography color="secondary.main">
                    Developpé par Geoffrey Hach
                </Typography>

                <a href="https://www.linkedin.com/in/hachgeoffrey/">
                    <LinkedInIcon color="secondary" />
                </a>
            </Box>
        </footer>
    );
}

export default Footer;
