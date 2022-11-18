import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function ResultItem({ couple }) {
    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                sx={{ width: "100%", minHeight: "2.5rem" }}
            >
                <Box display="flex" gap=".3rem">
                    <Typography sx={{ fontWeight: "bold" }}>
                        {couple.name1}
                    </Typography>
                    <Typography>doit offrir un cadeau à</Typography>
                    <Typography sx={{ fontWeight: "bold" }}>
                        {couple.name2}
                    </Typography>
                </Box>
            </Box>
            <Divider />
        </>
    );
}

export default ResultItem;
