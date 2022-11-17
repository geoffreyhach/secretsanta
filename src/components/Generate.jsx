import { Button } from "@mui/material";
import React from "react";

function Generate({ participants, setResults }) {
    const handleGenerate = (participants) => {
        const results = [];
        const arr = participants.map(
            (participant) => participant.name || participant.email.split("@")[0]
        );

        const shuffledArr = arr.sort((a, b) => 0.5 - Math.random());

        console.log(shuffledArr);

        shuffledArr.forEach((name, index) => {
            let nextIndex = index + 1;
            if (nextIndex === shuffledArr.length) nextIndex = 0;
            results.push([name, shuffledArr[nextIndex]]);
        });
        setResults(results);
    };

    return (
        <Button onClick={() => handleGenerate(participants)}>
            Générer Secret Santa
        </Button>
    );
}

export default Generate;
