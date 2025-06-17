import type { SquareValue } from "./Game";
import Square from "./Square";

interface BoardProps {
  board: SquareValue[];
  onSquareClick: (index: number) => void;
}

const Board = ({ board, onSquareClick }: BoardProps) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {board.map((square, index) => (
        <Square
          key={index}
          value={square}
          onSquareClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
