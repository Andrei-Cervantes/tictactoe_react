import { createContext, useContext } from "react";

interface StatusContextType {
  scores: {
    X: number;
    O: number;
    Draw: number;
  };
  updateScore: (player: "X" | "O" | "Draw", score: number) => void;
  currentPlayer: "X" | "O";
  setCurrentPlayer: (player: "X" | "O") => void;
  board: string[];
  setBoard: (board: string[]) => void;
}

const StatusContext = createContext<StatusContextType | undefined>(undefined);

export const useStatus = () => {
  const context = useContext(StatusContext);
  if (context === undefined) {
    throw new Error("useStatus must be used within a StatusProvider");
  }
  return context;
};

export default StatusContext;
