import { useState, useEffect } from "react";

type Scores = {
  X: number;
  O: number;
  Draw: number;
};

export const useScores = () => {
  const [scores, setScores] = useState<Scores>({
    X: 0,
    O: 0,
    Draw: 0,
  });

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

  return { scores, updateScore, resetScores };
};
