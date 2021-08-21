import React from "react";

interface SquareProps {
  value: string | null
  handleClick: (e: React.MouseEvent<HTMLElement>) => void
}

export const Square: React.FC<SquareProps> = ({value, handleClick}) => {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  )
}
