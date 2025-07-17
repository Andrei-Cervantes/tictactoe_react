import Board from "./Board";
import ResetButton from "./ResetButton";
import Status from "./Status";
import WinnerDialog from "./WinnerDialog";
import { useGameLogic } from "../hooks/useGameLogic";
import useMobile from "../hooks/useMobile";

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

  const isMobile = useMobile();

  const getClassName = () => {
    if (isMobile) {
      return "space-y-8 px-8 py-6 bg-board-bg/90";
    } else {
      return "space-y-12 px-12 py-8 bg-board-bg";
    }
  };

  return (
    <div
      className={`${getClassName()} bg-board-bg rounded-xl shadow-2xl w-fit text-center z-15`}
    >
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
