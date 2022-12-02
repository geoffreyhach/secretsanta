import React from "react";
import { Stack, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function Footer() {
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
                zIndex: "2",
                marginTop: "1rem",
            }}
        >
            <Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    gap=".5rem"
                >
                    <Typography color="secondary.main">
                        Developpé par Geoffrey Hach
                    </Typography>
                    <a href="https://geoffreyhach.fr/">
                        <OpenInNewIcon
                            color="secondary"
                            sx={{ fontSize: "large" }}
                        />
                    </a>
                </Stack>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    gap=".5rem"
                >
                    <Typography color="secondary.main">
                        Déployé par par Yavuz Kutuk
                    </Typography>
                    <a href="https://www.yavuz.fr/">
                        <OpenInNewIcon
                            color="secondary"
                            sx={{ fontSize: "large" }}
                        />
                    </a>
                </Stack>
            </Stack>
        </Stack>
    );
}

export default Footer;
