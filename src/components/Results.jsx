import { Box, Button } from "@mui/material";
import React from "react";
import ResultItem from "./ResultItem";

function Results({ results }) {
    console.log(results);
    return (
        <Box display="flex" flexDirection="column">
            {results.map((couple) => (
                <ResultItem couple={couple} />
            ))}
            <Button>Envoyer Emails</Button>
        </Box>
    );
}

export default Results;
