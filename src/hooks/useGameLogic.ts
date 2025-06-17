import { useState, useEffect } from "react";
import { calculateWinner } from "../lib/utils";

export type Player = "X" | "O";
export type SquareValue = Player | null;
export type Scores = {
  X: number;
  O: number;
  Draw: number;
};

export const useGameLogic = () => {
  const [scores, setScores] = useState<Scores>({
    X: 0,
    O: 0,
    Draw: 0,
  });

  const boardSize = 9;
  const [board, setBoard] = useState<SquareValue[]>(
    Array(boardSize).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [scoreUpdated, setScoreUpdated] = useState(false);

  const winner = calculateWinner(board);
  const isDraw = board.every((square) => square !== null) && !winner;
  const isGameOver = winner !== null || isDraw;

  // load scores from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("tictactoe-scores");
    if (saved) {
      setScores(JSON.parse(saved));
    }
  }, []);

  // update scores in localStorage when they change
  useEffect(() => {
    localStorage.setItem("tictactoe-scores", JSON.stringify(scores));
  }, [scores]);

  // Update scores when game ends (only once per game)
  useEffect(() => {
    if ((winner || isDraw) && !scoreUpdated) {
      setScores((prev) => {
        const newScores = { ...prev };
        if (winner) {
          newScores[winner as Player] = prev[winner as Player] + 1;
        } else if (isDraw) {
          newScores.Draw = prev.Draw + 1;
        }
        return newScores;
      });
      setScoreUpdated(true);
    }
  }, [winner, isDraw, scoreUpdated]); // Removed updateScore from dependencies

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

  const updateScore = (winner: "X" | "O" | "Draw") => {
    setScores((prev) => ({
      ...prev,
      [winner]: prev[winner] + 1,
    }));
  };

  const resetScores = () => {
    setScores({
      X: 0,
      O: 0,
      Draw: 0,
    });
  };

  return {
    scores,
    board,
    currentPlayer,
    winner,
    isDraw,
    isGameOver,
    handleSquareClick,
    handleReset,
    updateScore,
    resetScores,
  };
};
