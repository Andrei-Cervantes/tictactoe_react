import { cn } from "../lib/utils";

interface IndividualScoreProps {
  player: "X" | "O" | "Draw";
  score: number;
}

const IndividualScore = ({ player, score }: IndividualScoreProps) => {
  const bgColor =
    player === "Draw"
      ? "bg-player-draw"
      : player === "X"
      ? "bg-player-x"
      : "bg-player-o";

  return (
    <div
      className={cn(
        "w-[100px] h-[100px] flex flex-col justify-start p-4 items-center rounded-lg",
        bgColor
      )}
    >
      <p>{player === "Draw" ? "Draw" : `Player ${player}`}</p>
      <div className="flex justify-center items-center h-full">
        <p className="font-bold text-3xl ">{score}</p>
      </div>
    </div>
  );
};

export default IndividualScore;
