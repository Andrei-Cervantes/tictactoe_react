import Board from "./Board";
import ResetButton from "./ResetButton";
import Status from "./Status";

const Game = () => {
  return (
    <div className="space-y-4 p-12 bg-board-bg rounded-xl shadow-2xl w-fit text-center">
      <Status />
      <Board />
      <ResetButton />
    </div>
  );
};

export default Game;
