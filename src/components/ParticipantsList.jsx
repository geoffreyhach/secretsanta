import { Box } from "@mui/system";
import React from "react";
import ParticipantItem from "./ParticipantItem";

function ParticipantsList(props) {
    return (
        <Box sx={{ marginBottom: "2rem" }}>
            <ParticipantItem />
            <ParticipantItem />
        </Box>
    );
}

export default ParticipantsList;
