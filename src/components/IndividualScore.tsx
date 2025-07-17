import { cn } from "../lib/utils";
import useMobile from "../hooks/useMobile";

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

  const isMobile = useMobile();

  const getClassName = () => {
    if (isMobile) {
      return {
        header: "w-[80px] h-[80px] p-2",
        body: "text-sm",
      };
    } else {
      return {
        header: "w-[100px] h-[100px] p-4",
        body: "",
      };
    }
  };
  return (
    <div
      className={cn(
        `${
          getClassName().header
        } flex flex-col justify-start items-center rounded-lg`,
        bgColor
      )}
    >
      <p className={`${getClassName().body}`}>
        {player === "Draw" ? "Draw" : `Player ${player}`}
      </p>
      <div className="flex justify-center items-center h-full">
        <p className="font-bold text-3xl">{score}</p>
      </div>
    </div>
  );
};

export default IndividualScore;
