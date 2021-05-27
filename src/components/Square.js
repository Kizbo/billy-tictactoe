import React from "react";
import { resolveIconsBySymbols } from "../services/GameSymbols";

export default function Square({ value, onClick }) {
    const Icon = resolveIconsBySymbols(value);

    return (
        <div onClick={onClick} className="grid__square">
            {Icon}
        </div>
    );
}
