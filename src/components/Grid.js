import React from "react";
import { calculateWinner } from "../services/CalculateWinner";
import { GameStatusContext } from "../services/GameStatusContext";
import Square from "./Square";

function Grid({ handleOnWin }) {
    const [gameStatus, gameStatusDispatch] = React.useContext(GameStatusContext);
    const { squares } = gameStatus;

    /**
     * When user click on square, update it
     * with correct value (X or O)
     *
     * @param {number} index - index of a square in a grid
     */
    const handleSquareClick = (index) => {
        //if there is already a symbol in current Square, do nothing
        if (squares[index]) return;

        // create new array of squares without mutating the old one
        let newSquares = squares.slice();
        newSquares[index] = gameStatus.currentTurn;

        gameStatusDispatch({ type: "CHANGE_TURN" });

        /**
         * Check if there is a winner after square click and if
         * there is, annouce it, change scores and reset board
         */
        const maybeWinner = calculateWinner(newSquares);
        if (maybeWinner) {
            gameStatusDispatch({ type: "CHANGE_SQUARES", squares: Array(9).fill(null) });
            handleOnWin(maybeWinner);
        } else if (!newSquares.some((val) => val === null)) {
            //no squares are null and we have no winner, so we have a tie
            gameStatusDispatch({ type: "CHANGE_SQUARES", squares: Array(9).fill(null) });
            gameStatusDispatch({ type: "TIE" });
        } else {
            //if there is no winner yet and no tie, continue the game and update squares
            gameStatusDispatch({ type: "CHANGE_SQUARES", squares: newSquares });
        }
    };

    return (
        <div className="ttc-board__grid">
            {squares.map((square, index) => (
                <Square value={square} key={index} onClick={() => handleSquareClick(index)} />
            ))}
        </div>
    );
}

export default Grid;
