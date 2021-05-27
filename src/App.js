import React from "react";
import Board from "./components/Board";
import MessageOverlay from "./components/MessageOverlay";
import WhoStartsOverlay from "./components/WhoStartsOverlay";
import StatusBar from "./components/StatusBar";
import { GameStatusContext } from "./services/GameStatusContext";
import GameSymbols from "./services/GameSymbols";

function App() {
    const [overlay, toggleOverlay] = React.useState(false);
    const [whoStartsOverlay, toggleWhoStartsOverlay] = React.useState(true);
    const [, changeGameStatus] = React.useContext(GameStatusContext);

    /**
     * Handles actions after one of the players won the game, displaying
     * the MesssageOverlay with question asking if players want another round
     * and adding to score of the winning player
     *
     * @param {Symbol} whoWon - Symbol from GameSymbols
     */
    const handleOnWin = (whoWon) => {
        toggleOverlay(whoWon);
        if (whoWon === GameSymbols.X) changeGameStatus({ type: "X_WON" });
        else changeGameStatus({ type: "O_WON" });
    };

    /**
     * Handle the button click on the MessageOverlay - hiding it,
     * allowing players to play again after a win.
     */
    const handleAnotherRoundClick = () => toggleOverlay(false);

    /**
     * Dispatch a reset event to the global state, returning it to the
     * initial values and reseting the whole game, then asking the user
     * again who wants to start first
     */
    const restartGame = () => {
        changeGameStatus({ type: "RESET" });
        toggleOverlay(false);
        toggleWhoStartsOverlay(true);
    };

    /**
     * Handles interaction with overlay asking what symbol will
     * start the game first - after clicking the button, function dispatch
     * action to the global state
     *
     * @param {Symbol} symbol - Symbol from GameSymbols
     */
    const whoStart = (symbol) => {
        changeGameStatus({ type: "CHANGE_STARTING_TURN", symbol });
        toggleWhoStartsOverlay(false);
    };

    return (
        <>
            <h1>Bring a friend and play tic tac toe :)</h1>

            <div className="game-space-wrapper">
                <Board handleOnWin={handleOnWin} />
                <WhoStartsOverlay show={whoStartsOverlay} handleWhoStart={whoStart} />
                <MessageOverlay whoWon={overlay} handleAnotherRound={handleAnotherRoundClick} />
            </div>

            <StatusBar handleRestartGame={restartGame} />
        </>
    );
}

export default App;
