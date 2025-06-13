import Board from "./Board";
import ResetButton from "./ResetButton";
import Status from "./Status";

const Game = () => {
  return (
    <div className="space-y-4 p-6 bg-slate-700 rounded-xl shadow-2xl w-fit text-center border border-cyan-400/30">
      <Status />
      <Board />
      <ResetButton />
    </div>
  );
};

export default Game;
