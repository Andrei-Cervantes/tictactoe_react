import { useState, useEffect } from "react";
import Board from "./Board";
import ResetButton from "./ResetButton";
import Status from "./Status";
import { calculateWinner } from "../lib/utils";
import WinnerDialog from "./WinnerDialog";
import { useScores } from "../hooks/useScores";

export type Player = "X" | "O";
export type SquareValue = Player | null;

const Game = () => {
  const boardSize = 9;
  const [board, setBoard] = useState<SquareValue[]>(
    Array(boardSize).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [scoreUpdated, setScoreUpdated] = useState(false);
  const { scores, updateScore } = useScores();

  const winner = calculateWinner(board);
  const isDraw = board.every((square) => square !== null) && !winner;
  const isGameOver = winner !== null || isDraw;

  // Update scores when game ends (only once per game)
  useEffect(() => {
    if ((winner || isDraw) && !scoreUpdated) {
      if (winner) {
        updateScore(winner);
      } else if (isDraw) {
        updateScore("Draw");
      }
      setScoreUpdated(true);
    }
  }, [winner, isDraw, scoreUpdated, updateScore]);

  // Handler for clicks inside the board
  const handleSquareClick = (index: number) => {
    // return early if current square is filled or game is over
    if (board[index] || isGameOver) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const handleReset = () => {
    setBoard(Array(boardSize).fill(null));
    setCurrentPlayer("X");
    setScoreUpdated(false); // Reset the flag for the new game
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
