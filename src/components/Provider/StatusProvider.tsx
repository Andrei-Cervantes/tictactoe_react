import React, { useState } from "react";
import StatusContext from "../../StatusContext";

interface StatusProviderProps {
  children: React.ReactNode;
}

export const StatusProvider: React.FC<StatusProviderProps> = ({ children }) => {
  const [scores, setScores] = useState({
    X: 0,
    O: 0,
    Draw: 0,
  });

  const updateScore = (player: "X" | "O" | "Draw", score: number) => {
    setScores((prevScores) => ({
      ...prevScores,
      [player]: score,
    }));
  };

  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));

  return (
    <StatusContext.Provider
      value={{
        scores,
        updateScore,
        currentPlayer,
        setCurrentPlayer,
        board,
        setBoard,
      }}
    >
      {children}
    </StatusContext.Provider>
  );
};
