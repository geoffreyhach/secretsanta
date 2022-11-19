import React from "react";
import { Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer(props) {
    return (
        <Stack
            component="footer"
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            gap=".5rem"
            sx={{
                padding: ".5rem",
                maxHeight: "3vh",
                backgroundColor: "primary.main",
            }}
        >
            <Typography color="secondary.main">
                Developpé par Geoffrey Hach
            </Typography>

            <a href="https://www.linkedin.com/in/hachgeoffrey/">
                <LinkedInIcon color="secondary" />
            </a>
        </Stack>
    );
}

export default Footer;
