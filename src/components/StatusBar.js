import React from "react";
import { GameStatusContext } from "../services/GameStatusContext";
import { Avatar, Chip, Button } from "@material-ui/core";
import { resolveIconsBySymbols } from "../services/GameSymbols";

export default function StatusBar({ handleRestartGame }) {
    const [gameStatus] = React.useContext(GameStatusContext);

    const XIcon = resolveIconsBySymbols(gameStatus.currentTurn, "small");

    return (
        <div className="status-bar">
            <div className="status-bar__left">
                <p className="left__currentTurn">Turn: {XIcon}</p>
                <p className="left__title">Wins:</p>
                <Chip avatar={<Avatar className="left__letter">X</Avatar>} label={gameStatus.xWonTimes} />
                <Chip avatar={<Avatar className="left__letter">O</Avatar>} label={gameStatus.oWonTimes} />
            </div>
            <div className="status-bar__right">
                <Button color="secondary" variant="contained" onClick={handleRestartGame}>
                    Restart game
                </Button>
            </div>
        </div>
    );
}
