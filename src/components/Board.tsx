import React from "react";
import {Square} from "./Square";

export type Squares = (string | null)[]

interface BoardProps {
  squares: Squares,
  onClick: (i: number) => void
}

export const Board: React.FC<BoardProps> = ({squares, onClick}) => {
  return (
    <div>
      {[...Array(3)].map((_, i) => {
        return (
          <div className="board-row" key={i}>
            {[...Array(3)].map((_, j) => {
              const index = 3 * i + j
              return (
                <Square value={squares[index]} handleClick={() => onClick(index)} key={j}/>
              )
            })}
          </div>
        )
      })}
    </div>
  );
}

