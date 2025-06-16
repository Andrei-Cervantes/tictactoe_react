import { useStatus } from "../StatusContext";

interface BoardProps {
  board: string[];
  setBoard: (board: string[]) => void;
}

const Board = ({ board, setBoard }: BoardProps) => {
  const { currentPlayer, setCurrentPlayer } = useStatus();
  const handleCellClick = (index: number) => {
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    if (newBoard[index] === "") {
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {board.map((cell, index) => (
        <div
          key={index}
          className="w-25 h-25 bg-cells rounded-lg"
          onClick={() => handleCellClick(index)}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};

export default Board;
