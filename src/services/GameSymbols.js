import React from "react";
import ClearIcon from "@material-ui/icons/Clear";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

/**
 * Enum-like object for referencing symbols used in tic tac toe
 */
const GameSymbols = Object.freeze({
    X: Symbol("X"),
    O: Symbol("O"),
});

/**
 *  Resolve icon for given Game Symbol
 *
 * @param {Symbol} symbol
 * @param {string} size
 * @returns {ReactElement|null} - React element with icon resolved based on symbol given or null, if none match
 */
export const resolveIconsBySymbols = (symbol, size = "large") => {
    switch (symbol) {
        case GameSymbols.X:
            return <ClearIcon fontSize={size} />;
        case GameSymbols.O:
            return <RadioButtonUncheckedIcon fontSize={size} />;
        default:
            return null;
    }
};

export default GameSymbols;
