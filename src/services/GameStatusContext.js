import React from "react";
import GameSymbols from "./GameSymbols";

export const initialState = {
    currentTurn: GameSymbols.X,
    startingTurn: GameSymbols.X,
    xWonTimes: 0,
    oWonTimes: 0,
    squares: Array(9).fill(null),
};

/**
 * This context stores info about:
 * - who started the last game
 * - whose turn it is in the game (X or O)
 * - keep track how many times each player won the game
 * - keep track of the current symbols in squares on the board
 *
 * By default, X starts first in the game, but user can change that
 */
export const GameStatusContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_TURN":
            return { ...state, currentTurn: state.currentTurn === GameSymbols.X ? GameSymbols.O : GameSymbols.X };
        case "CHANGE_STARTING_TURN":
            return {
                ...state,
                currentTurn: action.symbol,
                startingTurn: action.symbol,
            };
        case "CHANGE_SQUARES": {
            return {
                ...state,
                squares: action.squares,
            };
        }
        case "X_WON":
            return {
                ...state,
                xWonTimes: state.xWonTimes + 1,
            };
        case "O_WON":
            return {
                ...state,
                oWonTimes: state.oWonTimes + 1,
            };
        case "TIE": {
            const newStartingTurn = state.startingTurn === GameSymbols.X ? GameSymbols.O : GameSymbols.X;

            return {
                ...state,
                currentTurn: newStartingTurn,
                startingTurn: newStartingTurn,
            };
        }
        case "RESET":
            return initialState;
        default:
            throw new Error(`No such action defined in GameState reducer - ${action.type}`);
    }
};

/**
 * Wrapper for providing GameStatus Context
 */
export const GameStatusContextProvider = (props) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return <GameStatusContext.Provider value={[state, dispatch]}>{props.children}</GameStatusContext.Provider>;
};
