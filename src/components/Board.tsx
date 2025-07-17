import type { SquareValue } from "../hooks/useGameLogic";
import useMobile from "../hooks/useMobile";
import Square from "./Square";

interface BoardProps {
  board: SquareValue[];
  onSquareClick: (index: number) => void;
}

const Board = ({ board, onSquareClick }: BoardProps) => {
  const isMobile = useMobile();

  const getClassName = () => {
    if (isMobile) {
      return "gap-4";
    } else {
      return "gap-4";
    }
  };
  return (
    <div>
      <div className={`grid grid-cols-3 w-fit mx-auto ${getClassName()}`}>
        {board.map((square, index) => (
          <Square
            key={index}
            value={square}
            onSquareClick={() => onSquareClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
