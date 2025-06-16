import Board from "./Board";
import ResetButton from "./ResetButton";
import Status from "./Status";
import { useStatus } from "../StatusContext";

const Game = () => {
  const { board, setBoard } = useStatus();

  return (
    <div className="space-y-12 p-12 bg-board-bg rounded-xl shadow-2xl w-fit text-center z-10">
      <Status />
      <Board board={board} setBoard={setBoard} />
      <ResetButton />
    </div>
  );
};

export default Game;
