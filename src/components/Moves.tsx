import React from "react";
import {History} from "./Game";

interface MovesProps {
  history: History
  jumpTo: (move: number) => void
}

export const Moves: React.FC<MovesProps> = ({history, jumpTo}) => {
  return (
    <ol>
      {history.map((step, move) => {
        const desc = move ?
          `Go to move #${move}` :
          `Go to game start`
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        )
      })}
    </ol>
  )
}
