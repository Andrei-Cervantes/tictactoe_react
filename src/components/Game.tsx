import { useState } from "react";
import Board from "./Board";
import ResetButton from "./ResetButton";
import Status from "./Status";
import { calculateWinner } from "../lib/utils";
import WinnerDialog from "./WinnerDialog";

export type Player = "X" | "O";
export type SquareValue = Player | null;

const Game = () => {
  const boardSize = 9;
  const [board, setBoard] = useState<SquareValue[]>(
    Array(boardSize).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [scores, setScores] = useState<{ X: number; O: number; Draw: number }>({
    X: 0,
    O: 0,
    Draw: 0,
  });

  const winner = calculateWinner(board);
  const isDraw = board.every((square) => square !== null) && !winner;
  const isGameOver = winner !== null || isDraw;

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
    <div className="space-y-12 px-12 py-8 bg-board-bg rounded-xl shadow-2xl w-fit text-center z-15">
      <Status scores={scores} currentPlayer={currentPlayer} />
      <Board board={board} onSquareClick={handleSquareClick} />
      <ResetButton onReset={handleReset} />

      {/* Winner Dialog */}
      <WinnerDialog
        winner={winner}
        isDraw={isDraw}
        onReset={handleReset}
        open={isGameOver}
      />
    </div>
  );
};

export default Game;
