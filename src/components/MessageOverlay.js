import { Button, Paper, Slide, Typography } from "@material-ui/core";
import React from "react";
import { resolveIconsBySymbols } from "../services/GameSymbols";

export default function MessageOverlay({ whoWon, handleAnotherRound }) {
    return (
        <Slide in={Boolean(whoWon)}>
            <Paper className="message-overlay">
                <h2 className="message-overlay__winner">{resolveIconsBySymbols(whoWon)}</h2>
                <Typography paragraph>has won the game!</Typography>
                <Button onClick={handleAnotherRound} variant="contained" color="secondary">
                    Another round
                </Button>
            </Paper>
        </Slide>
    );
}
