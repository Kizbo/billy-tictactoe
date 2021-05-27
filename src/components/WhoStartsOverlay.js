import { Button, ButtonGroup, Paper, Slide } from "@material-ui/core";
import React from "react";
import GameSymbols, { resolveIconsBySymbols } from "../services/GameSymbols";

export default function WhoStartsOverlay({ show, handleWhoStart }) {
    return (
        <Slide in={Boolean(show)}>
            <Paper className="message-overlay">
                <h2 className="message-overlay__winner">Who starts?</h2>
                <ButtonGroup>
                    <Button onClick={() => handleWhoStart(GameSymbols.X)} variant="contained" color="secondary">
                        {resolveIconsBySymbols(GameSymbols.X)}
                    </Button>
                    <Button onClick={() => handleWhoStart(GameSymbols.O)} variant="contained" color="secondary">
                        {resolveIconsBySymbols(GameSymbols.O)}
                    </Button>
                </ButtonGroup>
            </Paper>
        </Slide>
    );
}
