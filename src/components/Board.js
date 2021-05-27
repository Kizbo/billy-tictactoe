import React from "react";
import Grid from "./Grid";

function Board({ handleOnWin }) {
    return (
        <div className="ttc-board">
            <Grid handleOnWin={handleOnWin} />
        </div>
    );
}

export default Board;
