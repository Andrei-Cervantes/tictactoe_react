import { useState } from "react";
import Board from "./Board";
import ResetButton from "./ResetButton";
import Status from "./Status";

type Player = "X" | "O";
type SquareValue = Player | null;

const Game = () => {
  const boardSize = 9;
  const [board, setBoard] = useState<SquareValue[]>(
    Array(boardSize).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");

  // Handler for clicks inside the board
  const handleSquareClick = (index: number) => {
    // return early if current square is filled
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const handleReset = () => {
    setBoard(Array(boardSize).fill(null));
    setCurrentPlayer("X");
  };

  return (
    <div className="space-y-12 p-12 bg-board-bg rounded-xl shadow-2xl w-fit text-center z-15">
      <Status />
      <Board />
      <ResetButton />
    </div>
  );
};

export default Game;
