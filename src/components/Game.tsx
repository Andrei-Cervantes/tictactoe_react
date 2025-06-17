import Board from "./Board";
import ResetButton from "./ResetButton";
import Status from "./Status";
import WinnerDialog from "./WinnerDialog";
import { useGameLogic } from "../hooks/useGameLogic";

const Game = () => {
  const {
    scores,
    currentPlayer,
    board,
    handleSquareClick,
    handleReset,
    winner,
    isDraw,
    isGameOver,
  } = useGameLogic();

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
