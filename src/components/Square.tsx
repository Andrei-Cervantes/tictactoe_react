import type { SquareValue } from "../hooks/useGameLogic";
import useMobile from "../hooks/useMobile";

interface SquareProps {
  value: SquareValue;
  onSquareClick: () => void;
}

const Square = ({ value, onSquareClick }: SquareProps) => {
  const isMobile = useMobile();

  const getClassName = () => {
    if (isMobile) {
      return "w-20 h-20";
    } else {
      return "w-25 h-25";
    }
  };
  return (
    <div
      className={`${getClassName()} bg-cells rounded-lg cursor-pointer flex items-center justify-center text-4xl font-bold hover:scale-105 transition-all duration-100`}
      onClick={onSquareClick}
    >
      {value}
    </div>
  );
};

export default Square;
