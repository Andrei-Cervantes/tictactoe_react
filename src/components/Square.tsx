import type { SquareValue } from "../hooks/useGameLogic";

interface SquareProps {
  value: SquareValue;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: SquareProps) => {
  return (
    <div
      className="w-25 h-25 bg-cells rounded-lg cursor-pointer flex items-center justify-center text-4xl font-bold hover:scale-105 transition-all duration-100"
      onClick={onSquareClick}
    >
      {value}
    </div>
  );
};

export default Square;
