import { Box } from "@mui/system";
import React from "react";
import ParticipantItem from "./ParticipantItem";

function ParticipantsList({ participants, setParticipants }) {
    return (
        <Box sx={{ marginBottom: "2rem" }}>
            {participants.map((participant) => (
                <ParticipantItem
                    key={participant.email}
                    name={participant.name}
                    email={participant.email}
                    participants={participants}
                    setParticipants={setParticipants}
                />
            ))}
        </Box>
    );
}

export default ParticipantsList;
